import plugin from './plugin.json';
import getCompletionsList from './snippets/snippets.js';

class RNAutocomplete {
  constructor() {
    this.id = plugin.id;
    this.completer = null;
    this.allowedModes = /javascript|typescript|tsx|jsx/i;
    this.completionsData = [];
    this.isActive = false;
  }

  async init() {
    this.isActive = true;
    
    // 1. Snippet verilerini hazırla
    this.completionsData = getCompletionsList().map(item => ({
      caption: item.caption,
      value: item.snippet || item.caption,
      meta: item.meta || "RN",
      score: item.score || 1000, // Score'u yüksek tut ki üstte çıksın
      snippet: item.snippet
    }));

    // 2. Completer nesnesini tanımla
    this.completer = {
      id: this.id,
      getCompletions: (editor, session, pos, prefix, callback) => {
        if (!this.isActive || prefix.length === 0) return callback(null, []);
        
        const mode = session.getMode().$id;
        if (!mode || !this.allowedModes.test(mode)) return callback(null, []);

        const matches = this.completionsData.filter(item => 
          item.caption.toLowerCase().includes(prefix.toLowerCase())
        );
        callback(null, matches);
      }
    };

    // 3. Editör değişimlerini dinle (Önemli!)
    // Acode'da editör açıldığında veya değiştiğinde completer'ı tekrar ekleyelim
    this.applyCompleterToEditor();
    
    window.toast("React Native Snippets Active!", 2000);
  }

  applyCompleterToEditor() {
    const langTools = ace.require("ace/ext/language_tools");
    if (!langTools) return;

    // Hem global listeye ekle
    langTools.addCompleter(this.completer);

    // Hem de mevcut tüm aktif editörlere manuel ekle
    const editor = editorManager.editor;
    if (editor) {
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      });
      
      // Eğer completer listesinde yoksa ekle
      if (!editor.completers) editor.completers = [];
      if (!editor.completers.find(c => c.id === this.id)) {
        editor.completers.push(this.completer);
      }
    }
  }

  async destroy() {
    this.isActive = false;
    const langTools = ace.require("ace/ext/language_tools");
    if (langTools) {
      langTools.removeCompleter(this.completer);
    }
    
    const editor = editorManager.editor;
    if (editor && editor.completers) {
      editor.completers = editor.completers.filter(c => c.id !== this.id);
    }
    window.toast("React Native Snippets Removed!", 2000);
  }
}

if (window.acode) {
  const acodePlugin = new RNAutocomplete();
  
  acode.setPluginInit(acodePlugin.id, async (baseUrl, $page) => {
    acodePlugin.baseUrl = baseUrl;
    await acodePlugin.init();
  });
  
  acode.setPluginUnmount(acodePlugin.id, () => {
    acodePlugin.destroy();
  });
}
