export default function getCompletionsList() {
  return [
    // 1. BOILERPLATE (ŞABLONLAR)
    // ====================
    {
      caption: "rnfe",
      snippet:
        "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nconst ${1:Component} = () => {\n\treturn (\n\t\t<View style={styles.container}>\n\t\t\t<Text>${1:Component}</Text>\n\t\t</View>\n\t);\n};\n\nconst styles = StyleSheet.create({\n\tcontainer: {\n\t\tflex: 1,\n\t\tjustifyContent: 'center',\n\t\talignItems: 'center',\n\t}\n});\n\nexport default ${1:Component};",
      meta: "Boilerplate",
      score: 1300
    },

    // ====================
    // 3. CORE COMPONENTS (TEMEL BİLEŞENLER)
    {
      caption: "View",
      snippet: "<View style={styles.${1:container}}>\n\t${2}\n</View>",
      meta: "Component",
      score: 1200
    },
    {
      caption: "Text",
      snippet: "<Text style={styles.${1:text}}>\n\t${2}\n</Text>",
      meta: "Component",
      score: 1200
    },
    {
      caption: "TextInput",
      snippet:
        '<TextInput\n\tstyle={styles.${1:input}}\n\tvalue={${2:value}}\n\tonChangeText={${3:setValue}}\n\tplaceholder="${4:Placeholder}"\n/>',
      meta: "Component",
      score: 1200
    },
    {
      caption: "Image",
      snippet:
        "<Image \n\tsource={{ uri: '${1:https://...}' }} \n\tstyle={styles.${2:image}} \n/>",
      meta: "Component",
      score: 1200
    },
    {
      caption: "ImageBackground",
      snippet:
        "<ImageBackground source={{ uri: '${1}' }} style={styles.${2:background}}>\n\t${3}\n</ImageBackground>",
      meta: "Component",
      score: 1200
    },
    {
      caption: "ScrollView",
      snippet:
        "<ScrollView \n\tshowsVerticalScrollIndicator={false}\n\tcontentContainerStyle={styles.${1:content}}\n>\n\t${2}\n</ScrollView>",
      meta: "Component",
      score: 1200
    },
    {
      caption: "SafeAreaView",
      snippet:
        "<SafeAreaView style={styles.${1:safeArea}}>\n\t${2}\n</SafeAreaView>",
      meta: "Component",
      score: 1200
    },

    // Touchable Component
    {
      caption: "TouchableOpacity",
      snippet:
        "<TouchableOpacity \n\tonPress={${1}}\n\tactiveOpacity={0.7}\n\tstyle={styles.${2:button}}\n>\n\t${3}\n</TouchableOpacity>",
      meta: "Touchable",
      score: 1210
    },
    {
      caption: "Pressable",
      snippet:
        "<Pressable onPress={${1}} style={({ pressed }) => [\n\t{\n\t\topacity: pressed ? 0.5 : 1\n\t},\n\tstyles.${2:button}\n]}>\n\t${3}\n</Pressable>",
      meta: "Touchable",
      score: 1200
    },
    {
      caption: "TouchableHighlight",
      snippet:
        '<TouchableHighlight \n\tonPress={${1}}\n\tunderlayColor="${2:#DDDDDD}"\n>\n\t${3}\n</TouchableHighlight>',
      meta: "Touchable",
      score: 1200
    },

    // ====================
    // USER INTERFACE COMPONENTS
    // ====================
    {
      caption: "Button",
      snippet:
        '<Button\n\ttitle="${1:Button Title}"\n\tonPress={${2:() => console.log(\'Pressed\')}}\n\tcolor="${3:#007AFF}"\n\tdisabled={${4:false}}\n/>',
      meta: "UI Component",
      score: 1200
    },
    {
      caption: "Switch",
      snippet:
        '<Switch\n\ttrackColor={{ false: "${1:#767577}", true: "${2:#81b0ff}" }}\n\tthumbColor={${3:isEnabled} ? "${4:#f5dd4b}" : "${5:#f4f3f4}"}\n\tios_backgroundColor="${6:#3e3e3e}"\n\tonValueChange={${7:set${8:IsEnabled}}}\n\tvalue={${3:isEnabled}}\n\tdisabled={${9:false}}\n/>',
      meta: "UI Component",
      score: 1200
    },

    // ====================
    // 4. REACT NATIVE'E ÖZGÜ HOOK'LAR
    // ====================
    {
      caption: "useWindowDimensions",
      snippet: "const { height, width } = useWindowDimensions();",
      meta: "RN Hook",
      score: 1100
    },
    {
      caption: "useColorScheme",
      snippet: "const ${1:colorScheme} = useColorScheme();",
      meta: "RN Hook",
      score: 1100
    },

    //  REACT CORE
    // 1. TEMEL REACT HOOK'LARI
    // ====================
    {
      caption: "useState",
      snippet:
        "const [${1:state}, set${1:State}] = useState(${3:initialState});",
      meta: "Hook",
      score: 1160
    },
    {
      caption: "useEffect",
      snippet:
        "useEffect(() => {\n\t${1}\n\n\treturn () => {\n\t\t${2:// cleanup}\n\t};\n}, [${3:dependencies}]);",
      meta: "Hook",
      score: 1150
    },
    {
      caption: "useContext",
      snippet: "const ${1:value} = useContext(${2:MyContext});",
      meta: "Hook",
      score: 1150
    },

    // ====================
    // 2. EK (PERFORMANS VE REFERANS) HOOK'LARI
    // ====================
    {
      caption: "useReducer",
      snippet:
        "const [${1:state}, ${2:dispatch}] = useReducer(${3:reducer}, ${4:initialState});",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useCallback",
      snippet:
        "const ${1:memoizedCallback} = useCallback(\n\t() => {\n\t\t${2}\n\t},\n\t[${3:dependencies}]\n);",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useMemo",
      snippet:
        "const ${1:memoizedValue} = useMemo(() => ${2:computeExpensiveValue}, [${3:dependencies}]);",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useRef",
      snippet: "const ${1:ref} = useRef(${2:initialValue});",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useLayoutEffect",
      snippet:
        "useLayoutEffect(() => {\n\t${1}\n\n\treturn () => {\n\t\t${2:// cleanup}\n\t};\n}, [${3:dependencies}]);",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useImperativeHandle",
      snippet:
        "useImperativeHandle(${1:ref}, () => ({\n\t${2:methodName}: () => {\n\t\t${3}\n\t}\n}), [${4:dependencies}]);",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useDebugValue",
      snippet: "useDebugValue(${1:value});",
      meta: "Hook",
      score: 1100
    },

    // ====================
    // 3. REACT 18 YENİ HOOK'LAR
    // ====================
    {
      caption: "useId",
      snippet: "const ${1:id} = useId();",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useTransition",
      snippet:
        "const [${1:isPending}, ${2:startTransition}] = useTransition();",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useDeferredValue",
      snippet: "const ${1:deferredValue} = useDeferredValue(${2:value});",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useSyncExternalStore",
      snippet:
        "const ${1:state} = useSyncExternalStore(${2:subscribe}, ${3:getSnapshot});",
      meta: "Hook",
      score: 1100
    },
    {
      caption: "useInsertionEffect",
      snippet: "useInsertionEffect(() => {\n\t${1}\n}, [${2:dependencies}]);",
      meta: "Hook",
      score: 1100
    },

    // Core React Web & Mobile
    {
      caption: "Fragment",
      snippet: "<Fragment>\n\t${1}\n</Fragment>",
      meta: "React Core",
      score: 900
    },
    {
      caption: "StrictMode",
      snippet: "<StrictMode>\n\t${1}\n</StrictMode>",
      meta: "React Core",
      score: 900
    },
    {
      caption: "Suspense",
      snippet: "<Suspense fallback={${1:null}}>\n\t${2}\n</Suspense>",
      meta: "React Core",
      score: 900
    },
    {
      caption: "Profiler",
      snippet:
        '<Profiler id="${1:Component}" onRender={${2:onRenderCallback}}>\n\t${3}\n</Profiler>',
      meta: "React Core",
      score: 900
    },
    {
      caption: "useActionState",
      snippet:
        "const [${1:state}, ${2:formAction}, ${3:isPending}] = useActionState(${4:fn}, ${5:initialState});",
      meta: "Hook (React 19)",
      score: 900
    },
    {
      caption: "useOptimistic",
      snippet:
        "const [${1:optimisticState}, ${2:addOptimistic}] = useOptimistic(${3:state}, ${4:updateFn});",
      meta: "Hook (React 19)",
      score: 900
    },
    {
      caption: "use",
      snippet: "const ${1:value} = use(${2:resource});",
      meta: "React API (React 19)",
      score: 900
    },

    {
      caption: "createContext",
      snippet: "const ${1:MyContext} = createContext(${2:initialValue});",
      meta: "React Context",
      score: 900
    },
    {
      caption: "forwardRef",
      snippet:
        "const ${1:MyComponent} = forwardRef((${2:props}, ${3:ref}) => {\n\treturn (\n\t\t<${4:View} ref={${3:ref}}>\n\t\t\t${5}\n\t\t</${4:View}>\n\t);\n});",
      meta: "React API",
      score: 900
    },
    {
      caption: "memo",
      snippet:
        "const ${1:MemoizedComponent} = memo(function ${2:MyComponent}(${3:props}) {\n\treturn (\n\t\t${4}\n\t);\n});",
      meta: "React API",
      score: 900
    },
    {
      caption: "lazy",
      snippet:
        "const ${1:LazyComponent} = lazy(() => import('${2:./path/to/Component}'));",
      meta: "React API",
      score: 900
    },
    {
      caption: "startTransition",
      snippet: "startTransition(() => {\n\t${1:setState(newValue)};\n});",
      meta: "React API",
      score: 900
    },
    {
      caption: "cloneElement",
      snippet:
        "const ${1:clonedElement} = cloneElement(${2:element}, ${3:props}, ${4:...children});",
      meta: "React API",
      score: 900
    },
    {
      caption: "isValidElement",
      snippet: "const ${1:isValid} = isValidElement(${2:element});",
      meta: "React API",
      score: 900
    },
    {
      caption: "Children.map",
      snippet:
        "Children.map(${1:children}, ${2:child} => {\n\treturn ${3:child};\n});",
      meta: "React API",
      score: 900
    },
    {
      caption: "Children.forEach",
      snippet: "Children.forEach(${1:children}, ${2:child} => {\n\t${3}\n});",
      meta: "React API",
      score: 900
    },
    {
      caption: "Children.count",
      snippet: "Children.count(${1:children});",
      meta: "React API",
      score: 900
    },
    {
      caption: "Children.only",
      snippet: "Children.only(${1:children});",
      meta: "React API",
      score: 900
    },
    {
      caption: "Children.toArray",
      snippet: "Children.toArray(${1:children});",
      meta: "React API",
      score: 900
    },
    {
      caption: "createRef",
      snippet: "const ${1:myRef} = createRef();",
      meta: "React API",
      score: 900
    },
    {
      caption: "Component",
      snippet:
        "class ${1:MyComponent} extends Component {\n\trender() {\n\t\treturn (\n\t\t\t${2}\n\t\t);\n\t}\n}",
      meta: "Class Component",
      score: 900
    },
    {
      caption: "PureComponent",
      snippet:
        "class ${1:MyPureComponent} extends PureComponent {\n\trender() {\n\t\treturn (\n\t\t\t${2}\n\t\t);\n\t}\n}",
      meta: "Class Component",
      score: 900
    },

    {
      caption: "createElement",
      snippet:
        "const ${1:element} = createElement(${2:Component}, ${3:props}, ${4:children});",
      meta: "React API",
      score: 900
    },
    {
      caption: "cache",
      snippet:
        "const ${1:cachedFunction} = cache(async (${2:arg}) => {\n\t${3}\n});",
      meta: "React API (React 19)",
      score: 900
    },
    {
      caption: "SuspenseList",
      snippet:
        '<SuspenseList revealOrder="${1|forwards,backwards,together|}">\n\t${2}\n</SuspenseList>',
      meta: "React Core (Experimental)",
      score: 900
    },

    // REACT CORE End..

    // ====================
    // REACT LİST COMPONENTS
    // ====================
    {
      caption: "FlatList",
      snippet:
        "<FlatList\n\tdata={${1:data}}\n\tkeyExtractor={(item) => item.id.toString()}\n\trenderItem={({ item }) => (\n\t\t<View>\n\t\t\t<Text>{${2:item.title}}</Text>\n\t\t</View>\n\t)}\n/>",
      meta: "List Component",
      score: 1000
    },
    {
      caption: "SectionList",
      snippet:
        "<SectionList\n\tsections={${1:DATA}}\n\tkeyExtractor={(item, index) => item + index}\n\trenderItem={({ item }) => (\n\t\t<View>\n\t\t\t<Text>{${2:item}}</Text>\n\t\t</View>\n\t)}\n\trenderSectionHeader={({ section: { title } }) => (\n\t\t<Text style={styles.header}>{${3:title}}</Text>\n\t)}\n/>",
      meta: "List Component",
      score: 1000
    },
    {
      caption: "VirtualizedList",
      snippet:
        "<VirtualizedList\n\tdata={${1:data}}\n\tinitialNumToRender={${2:10}}\n\tkeyExtractor={(item) => item.${3:id}.toString()}\n\tgetItemCount={${4:(data) => data.length}}\n\tgetItem={${5:(data, index) => data[index]}}\n\trenderItem={({ item }) => (\n\t\t<View style={styles.${6:itemContainer}}>\n\t\t\t<Text>{${7:item.title}}</Text>\n\t\t</View>\n\t)}\n/>",
      meta: "List Component",
      score: 950
    },

    // ====================
    // ANDROID COMPONENTS & APIs
    // ====================
    {
      caption: "BackHandler",
      snippet:
        'useEffect(() => {\n\tconst backAction = () => {\n\t\t${1:// Geri tuşuna basıldığında yapılacak işlem}\n\t\treturn ${2:true}; // true dönerse uygulamanın kapanmasını engeller\n\t};\n\n\tconst backHandler = BackHandler.addEventListener(\n\t\t"hardwareBackPress",\n\t\tbackAction\n\t);\n\n\treturn () => backHandler.remove();\n}, []);',
      meta: "Android API",
      score: 1000
    },
    {
      caption: "DrawerLayoutAndroid",
      snippet:
        '<DrawerLayoutAndroid\n\tref={${1:drawerRef}}\n\tdrawerWidth={${2:300}}\n\tdrawerPosition={${3:"left"}} // "left" veya "right"\n\trenderNavigationView={() => (\n\t\t<View style={styles.${4:drawerContainer}}>\n\t\t\t${5:<Text>Menü İçeriği</Text>}\n\t\t</View>\n\t)}\n>\n\t<View style={styles.${6:mainContainer}}>\n\t\t${7:<Text>Ana İçerik</Text>}\n\t</View>\n</DrawerLayoutAndroid>',
      meta: "Android Component",
      score: 950
    },
    {
      caption: "PermissionsAndroid",
      snippet:
        'try {\n\tconst granted = await PermissionsAndroid.request(\n\t\tPermissionsAndroid.PERMISSIONS.${1:CAMERA},\n\t\t{\n\t\t\ttitle: "${2:İzin Gerekli}",\n\t\t\tmessage: "${3:Uygulamanın bu özelliğe erişmesi gerekiyor.}",\n\t\t\tbuttonNeutral: "${4:Daha Sonra}",\n\t\t\tbuttonNegative: "${5:İptal}",\n\t\t\tbuttonPositive: "${6:Tamam}"\n\t\t}\n\t);\n\n\tif (granted === PermissionsAndroid.RESULTS.GRANTED) {\n\t\t${7:console.log(\'İzin verildi\');}\n\t} else {\n\t\t${8:console.log(\'İzin reddedildi\');}\n\t}\n} catch (err) {\n\tconsole.warn(err);\n}',
      meta: "Android API",
      score: 950
    },
    {
      caption: "ToastAndroid.show",
      snippet:
        'ToastAndroid.show("${1:Mesaj içeriği}", ToastAndroid.${2:SHORT});',
      meta: "Android API",
      score: 1000
    },
    {
      caption: "ToastAndroid.showWithGravity",
      snippet:
        'ToastAndroid.showWithGravity(\n\t"${1:Mesaj içeriği}",\n\tToastAndroid.${2:SHORT}, // SHORT veya LONG\n\tToastAndroid.${3:BOTTOM} // TOP, BOTTOM veya CENTER\n);',
      meta: "Android API",
      score: 1000
    },

    // ====================
    // OTHERS (DİĞER BİLEŞENLER VE API'LER)
    // ====================
    // ActivityIndicator
    {
      caption: "ActivityIndicator",
      snippet:
        "<ActivityIndicator \n\tsize=\"${1:large}\" // 'small' veya 'large'\n\tcolor=\"${2:#0000ff}\" \n\tanimating={${3:true}} \n/>",
      meta: "UI Component",
      score: 1000
    },
    // Alert
    {
      caption: "Alert.alert",
      snippet:
        'Alert.alert(\n\t"${1:Başlık}",\n\t"${2:Mesaj İçeriği}",\n\t[\n\t\t{ text: "${3:İptal}", onPress: () => ${4:console.log(\'İptal\')}, style: "cancel" },\n\t\t{ text: "${5:Tamam}", onPress: () => ${6:console.log(\'Tamam\')} }\n\t],\n\t{ cancelable: ${7:true} }\n);',
      meta: "Android API",
      score: 1000
    },
    // Animated (En çok kullanılan timing ve View)
    {
      caption: "Animated.timing",
      snippet:
        "Animated.timing(${1:animatedValue}, {\n\ttoValue: ${2:1},\n\tduration: ${3:1000},\n\tuseNativeDriver: ${4:true},\n}).start(${5:() => console.log('Animasyon bitti')});",
      meta: "API",
      score: 1000
    },
    {
      caption: "Animated.View",
      snippet:
        "<Animated.View style={{ opacity: ${1:fadeAnim}, transform: [{ translateY: ${2:moveAnim} }] }}>\n\t${3}\n</Animated.View>",
      meta: "Component",
      score: 1000
    },
    // Dimensions
    {
      caption: "Dimensions.get",
      snippet:
        "const { width, height } = Dimensions.get('${1:window}'); // 'window' veya 'screen'",
      meta: "API",
      score: 1000
    },
    // KeyboardAvoidingView
    {
      caption: "KeyboardAvoidingView",
      snippet:
        "<KeyboardAvoidingView\n\tbehavior={Platform.OS === 'ios' ? 'padding' : '${1:height}'}\n\tkeyboardVerticalOffset={Platform.OS === 'ios' ? ${2:0} : ${3:20}}\n\tstyle={styles.${4:container}}\n>\n\t${5}\n</KeyboardAvoidingView>",
      meta: "Component",
      score: 1000
    },
    // Linking (URL açma kontrolü ile birlikte)
    {
      caption: "Linking.openURL",
      snippet:
        "const url = '${1:https://google.com}';\nconst supported = await Linking.canOpenURL(url);\n\nif (supported) {\n\tawait Linking.openURL(url);\n} else {\n\tAlert.alert(`Bağlantı açılamıyor: ${url}`);\n}",
      meta: "API",
      score: 1000
    },
    // Modal
    {
      caption: "Modal",
      snippet:
        "<Modal\n\tanimationType=\"${1:slide}\" // 'slide', 'fade', 'none'\n\ttransparent={${2:true}}\n\tvisible={${3:modalVisible}}\n\tonRequestClose={() => {\n\t\tset${4:ModalVisible}(!${3:modalVisible});\n\t}}\n>\n\t<View style={styles.${5:centeredView}}>\n\t\t<View style={styles.${6:modalView}}>\n\t\t\t${7:<Text>Modal İçeriği</Text>}\n\t\t</View>\n\t</View>\n</Modal>",
      meta: "Component",
      score: 1000
    },
    // PixelRatio
    {
      caption: "PixelRatio.get",
      snippet: "const ${1:pixelRatio} = PixelRatio.get();",
      meta: "API",
      score: 1000
    },
    {
      caption: "PixelRatio.roundToNearestPixel",
      snippet: "const ${1:size} = PixelRatio.roundToNearestPixel(${2:10.5});",
      meta: "API",
      score: 1000
    },
    // RefreshControl (ScrollView veya FlatList içine yazılır)
    {
      caption: "RefreshControl",
      snippet:
        "refreshControl={\n\t<RefreshControl\n\t\trefreshing={${1:refreshing}}\n\t\tonRefresh={${2:onRefresh}}\n\t\tcolors={['${3:#9Bd35A}', '${4:#689F38}']} // Android için renkler\n\t\ttintColor=\"${5:#689F38}\" // iOS için renk\n\t/>\n}",
      meta: "Component Prop",
      score: 1000
    },
    // StatusBar
    {
      caption: "StatusBar",
      snippet:
        "<StatusBar\n\tanimated={${1:true}}\n\tbackgroundColor=\"${2:#ffffff}\" // Sadece Android\n\tbarStyle=\"${3:dark-content}\" // 'default', 'light-content', 'dark-content'\n\tshowHideTransition=\"${4:fade}\" // 'fade', 'slide', 'none'\n\thidden={${5:false}}\n\ttranslucent={${6:false}} // Sadece Android\n/>",
      meta: "Component",
      score: 1000
    },

    // Platform.select
    {
      caption: "Platform.select",
      snippet:
        "Platform.select({\n\tios: ${1},\n\tandroid: ${2},\n\tdefault: ${3}\n})",
      meta: "API",
      score: 1000
    },
    // Platform.OS
    {
      caption: "Platform.OS",
      snippet: "Platform.OS === '${1:ios}'",
      meta: "API",
      score: 1000
    },
    // Keyboard.dismiss
    {
      caption: "Keyboard.dismiss",
      snippet: "Keyboard.dismiss();",
      meta: "API",
      score: 1000
    },

    // StyleSheet.create
    {
      caption: "StyleSheet.create",
      snippet:
        "const styles = StyleSheet.create({\n\t${1:container}: {\n\t\t${2}\n\t}\n});",
      meta: "API",
      score: 1000
    },

    // 7. COMMON STYLES (EN SIK KULLANILAN STİLLER)
    // ====================
    // Flexbox

    {
      caption: "flex: 1",
      snippet: "flex: 1,",
      meta: "Style",
      score: 1100
    },
    {
      caption: "flexDirection: row",
      snippet: "flexDirection: 'row',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "justifyContent: center",
      snippet: "justifyContent: 'center',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "justifyContent: space-between",
      snippet: "justifyContent: 'space-between',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "alignItems: center",
      snippet: "alignItems: 'center',",
      meta: "Style",
      score: 1100
    },
    // Spacing
    {
      caption: "padding",
      snippet: "padding: ${1:10},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "paddingHorizontal",
      snippet: "paddingHorizontal: ${1:16},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "paddingVertical",
      snippet: "paddingVertical: ${1:12},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "margin",
      snippet: "margin: ${1:10},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "marginBottom",
      snippet: "marginBottom: ${1:10},",
      meta: "Style",
      score: 1100
    },
    // Colors & Borders
    {
      caption: "backgroundColor",
      snippet: "backgroundColor: '${1:#ffffff}',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "borderRadius",
      snippet: "borderRadius: ${1:8},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "borderWidth",
      snippet: "borderWidth: ${1:1},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "borderColor",
      snippet: "borderColor: '${1:#dddddd}',",
      meta: "Style",
      score: 1100
    },
    // Text Styles
    {
      caption: "fontSize",
      snippet: "fontSize: ${1:16},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "fontWeight: bold",
      snippet: "fontWeight: 'bold',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "color",
      snippet: "color: '${1:#000000}',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "textAlign: center",
      snippet: "textAlign: 'center',",
      meta: "Style",
      score: 1100
    },
    // Sizing
    {
      caption: "width: 100%",
      snippet: "width: '100%',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "height",
      snippet: "height: ${1:50},",
      meta: "Style",
      score: 1100
    },

    // ====================
    // 8. LAYOUT & POSITIONING (KONUMLANDIRMA VE DÜZEN)
    // ====================
    {
      caption: "position: absolute",
      snippet: "position: 'absolute',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "position: relative",
      snippet: "position: 'relative',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "top",
      snippet: "top: ${1:0},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "bottom",
      snippet: "bottom: ${1:0},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "left",
      snippet: "left: ${1:0},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "right",
      snippet: "right: ${1:0},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "zIndex",
      snippet: "zIndex: ${1:1},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "flexWrap: wrap",
      snippet: "flexWrap: 'wrap',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "alignSelf: center",
      snippet: "alignSelf: 'center',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "alignSelf: flex-start",
      snippet: "alignSelf: 'flex-start',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "alignSelf: flex-end",
      snippet: "alignSelf: 'flex-end',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "gap",
      snippet: "gap: ${1:10},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "rowGap",
      snippet: "rowGap: ${1:10},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "columnGap",
      snippet: "columnGap: ${1:10},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "aspectRatio",
      snippet: "aspectRatio: ${1:1},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "display: none",
      snippet: "display: 'none',",
      meta: "Style",
      score: 1100
    },

    // ====================
    // 9. SPECIFIC SPACING & BORDERS (ÖZEL BOŞLUKLAR VE KENARLIKLAR)
    // ====================
    {
      caption: "marginTop",
      snippet: "marginTop: ${1:10},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "marginHorizontal",
      snippet: "marginHorizontal: ${1:16},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "marginVertical",
      snippet: "marginVertical: ${1:12},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "borderTopWidth",
      snippet: "borderTopWidth: ${1:1},",
      meta: "Style",
      score: 1000
    },
    {
      caption: "borderBottomWidth",
      snippet: "borderBottomWidth: ${1:1},",
      meta: "Style",
      score: 1000
    },
    {
      caption: "borderStyle: dashed",
      snippet: "borderStyle: '${1:dashed}',",
      meta: "Style",
      score: 1000
    },
    {
      caption: "borderStyle: dotted",
      snippet: "borderStyle: '${1:dotted}',",
      meta: "Style",
      score: 1000
    },
    {
      caption: "borderTopLeftRadius",
      snippet: "borderTopLeftRadius: ${1:8},",
      meta: "Style",
      score: 1000
    },
    {
      caption: "borderTopRightRadius",
      snippet: "borderTopRightRadius: ${1:8},",
      meta: "Style",
      score: 1000
    },

    // ====================
    // 10. TYPOGRAPHY (TİPOGRAFİ VE YAZI)
    // ====================
    {
      caption: "lineHeight",
      snippet: "lineHeight: ${1:24},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "letterSpacing",
      snippet: "letterSpacing: ${1:0.5},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "textTransform: uppercase",
      snippet: "textTransform: 'uppercase',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "textTransform: capitalize",
      snippet: "textTransform: 'capitalize',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "textDecorationLine: underline",
      snippet: "textDecorationLine: 'underline',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "textDecorationLine: line-through",
      snippet: "textDecorationLine: 'line-through',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "fontFamily",
      snippet: "fontFamily: '${1:System}',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "fontStyle: italic",
      snippet: "fontStyle: 'italic',",
      meta: "Style",
      score: 1100
    },

    // ====================
    // 11. VISUALS & SHADOWS (GÖRSELLİK VE GÖLGELER)
    // ====================
    {
      caption: "opacity",
      snippet: "opacity: ${1:0.5},",
      meta: "Style",
      score: 1100
    },
    {
      caption: "overflow: hidden",
      snippet: "overflow: 'hidden',",
      meta: "Style",
      score: 1100
    },
    {
      caption: "elevation ",
      snippet: "elevation: ${1:5},",
      meta: "Style",
      score: 1050
    },
    {
      caption: "shadow (iOS)",
      snippet:
        "shadowColor: '${1:#000}',\nshadowOffset: {\n\twidth: ${2:0},\n\theight: ${3:2},\n},\nshadowOpacity: ${4:0.25},\nshadowRadius: ${5:3.84},",
      meta: "Style",
      score: 1050
    },
    {
      caption: "resizeMode: contain",
      snippet: "resizeMode: '${1:contain}',",
      meta: "Style",
      score: 1050
    },
    {
      caption: "resizeMode: cover",
      snippet: "resizeMode: '${1:cover}',",
      meta: "Style",
      score: 1050
    },
    {
      caption: "tintColor",
      snippet: "tintColor: '${1:#007AFF}',",
      meta: "Style",
      score: 1050
    },

    // Android API
    {
      caption: "TouchableWithoutFeedback",
      snippet:
        "<TouchableWithoutFeedback onPress={${1:handlePress}}>\n\t<View style={${2:styles.container}}>\n\t\t${3}\n\t</View>\n</TouchableWithoutFeedback>",
      meta: "Touchable",
      score: 800
    },
    {
      caption: "AppState.addEventListener",
      snippet:
        "const subscription = AppState.addEventListener('change', nextAppState => {\n\tif (nextAppState === 'active') {\n\t\t${1}\n\t}\n});\n\n// Temizlemek için: subscription.remove();",
      meta: "API",
      score: 800
    },
    {
      caption: "Share.share",
      snippet:
        "try {\n\tconst result = await Share.share({\n\t\tmessage: '${1:Paylaşılacak mesaj veya URL...}',\n\t});\n\tif (result.action === Share.sharedAction) {\n\t\t${2}\n\t}\n} catch (error) {\n\tAlert.alert(error.message);\n}",
      meta: "API",
      score: 800
    },
    {
      caption: "Vibration.vibrate",
      snippet: "Vibration.vibrate(${1|800,[800, 2000, 3000]|});",
      meta: "API",
      score: 800
    },
    {
      caption: "Appearance.getColorScheme",
      snippet:
        "const colorScheme = Appearance.getColorScheme();\nif (colorScheme === '${1|dark,light|}') {\n\t${2}\n}",
      meta: "API",
      score: 800
    },
    {
      caption: "InteractionManager.runAfterInteractions",
      snippet:
        "InteractionManager.runAfterInteractions(() => {\n\t${1:// Animasyonlar bitince çalışacak ağır işlemler...}\n});",
      meta: "API",
      score: 800
    },
    {
      caption: "LayoutAnimation.configureNext",
      snippet:
        "LayoutAnimation.configureNext(LayoutAnimation.Presets.${1|easeInEaseOut,spring,linear|});",
      meta: "API",
      score: 800
    },
    {
      caption: "PanResponder.create",
      snippet:
        "const panResponder = PanResponder.create({\n\tonStartShouldSetPanResponder: () => true,\n\tonPanResponderMove: (evt, gestureState) => {\n\t\t${1}\n\t},\n\tonPanResponderRelease: () => {\n\t\t${2}\n\t},\n});",
      meta: "API",
      score: 800
    },
    {
      caption: "LogBox.ignoreLogs",
      snippet: "LogBox.ignoreLogs(['${1:Gizlemek istediğiniz uyarı metni}']);",
      meta: "API",
      score: 800
    },
    {
      caption: "ActionSheetIOS.showActionSheetWithOptions",
      snippet:
        "ActionSheetIOS.showActionSheetWithOptions(\n\t{\n\t\toptions: ['İptal', '${1:Seçenek 1}', '${2:Seçenek 2}'],\n\t\tdestructiveButtonIndex: ${3:2},\n\t\tcancelButtonIndex: 0,\n\t},\n\t(buttonIndex) => {\n\t\tif (buttonIndex === 1) {\n\t\t\t${4}\n\t\t}\n\t}\n);",
      meta: "iOS API",
      score: 800
    },
    {
      caption: "InputAccessoryView",
      snippet:
        '<InputAccessoryView nativeID="${1:uniqueID}">\n\t<View style={${2:styles.accessory}}>\n\t\t<Button onPress={() => Keyboard.dismiss()} title="${3:Kapat}" />\n\t</View>\n</InputAccessoryView>',
      meta: "iOS Component",
      score: 800
    },
    {
      caption: "findNodeHandle",
      snippet: "const node = findNodeHandle(${1:ref.current});",
      meta: "API",
      score: 800
    },
    {
      caption: "NativeEventEmitter",
      snippet:
        "const eventEmitter = new NativeEventEmitter(${1:NativeModule});\nconst eventListener = eventEmitter.addListener('${2:EventName}', (event) => {\n\t${3}\n});",
      meta: "API",
      score: 800
    },

    {
      caption: "Keyboard.addListener",
      snippet:
        "const keyboardDidShowListener = Keyboard.addListener(\n\t'${1|keyboardDidShow,keyboardWillShow|}',\n\t(e) => {\n\t\t${2:// e.endCoordinates.height ile klavye boyunu alabilirsiniz}\n\t}\n);\n\n// Temizlemek için: keyboardDidShowListener.remove();",
      meta: "API",
      score: 800
    },
    {
      caption: "Animated.spring",
      snippet:
        "Animated.spring(${1:animatedValue}, {\n\ttoValue: ${2:1},\n\tfriction: ${3:7},\n\ttension: ${4:40},\n\tuseNativeDriver: ${5:true},\n}).start();",
      meta: "API",
      score: 800
    },
    {
      caption: "Animated.sequence",
      snippet:
        "Animated.sequence([\n\tAnimated.timing(${1:animatedValue}, {\n\t\ttoValue: ${2:1},\n\t\tduration: ${3:500},\n\t\tuseNativeDriver: ${4:true},\n\t}),\n\tAnimated.spring(${5:animatedValue2}, {\n\t\ttoValue: ${6:1},\n\t\tuseNativeDriver: ${7:true},\n\t})\n]).start();",
      meta: "API",
      score: 800
    },
    {
      caption: "Animated.parallel",
      snippet:
        "Animated.parallel([\n\tAnimated.timing(${1:animatedValue1}, { toValue: 1, useNativeDriver: true }),\n\tAnimated.timing(${2:animatedValue2}, { toValue: 1, useNativeDriver: true })\n]).start();",
      meta: "API",
      score: 800
    },
    {
      caption: "Easing",
      snippet: "Easing.${1|bounce,ease,elastic(1),linear,quad|}",
      meta: "API",
      score: 800
    },
    {
      caption: "I18nManager",
      snippet:
        "if (I18nManager.isRTL) {\n\t${1:// Sağdan sola dil (Arapça, İbranice vs.) için özel stil ayarlamaları}\n}\n// I18nManager.forceRTL(true); // Değişiklik sonrası uygulamanın yeniden başlatılması gerekir",
      meta: "API",
      score: 800
    },
    {
      caption: "PlatformColor",
      snippet:
        "color: PlatformColor('${1|@android:color/holo_blue_bright,systemBlue|}')",
      meta: "API",
      score: 800
    },
    {
      caption: "Image.getSize",
      snippet:
        "Image.getSize('${1:https://...}', (width, height) => {\n\t${2}\n}, (error) => {\n\tconsole.error(error);\n});",
      meta: "API",
      score: 800
    },
    {
      caption: "Image.prefetch",
      snippet: "await Image.prefetch('${1:https://...}');",
      meta: "API",
      score: 800
    },
    {
      caption: "DevSettings.addMenuItem",
      snippet:
        "if (__DEV__) {\n\tDevSettings.addMenuItem('${1:Menü Seçeneği Adı}', () => {\n\t\t${2}\n\t});\n}",
      meta: "API",
      score: 800
    },

    {
      caption: "TouchableNativeFeedback",
      snippet:
        "<TouchableNativeFeedback\n\tbackground={TouchableNativeFeedback.Ripple('${1:color}', ${2:true})}\n\tonPress={${3:handlePress}}>\n\t<View style={${4:styles.button}}>\n\t\t<Text>${5:Buton}</Text>\n\t</View>\n</TouchableNativeFeedback>",
      meta: "Touchable (Android)",
      score: 750
    },
    {
      caption: "AppRegistry.registerComponent",
      snippet: "AppRegistry.registerComponent('${1:AppName}', () => ${2:App});",
      meta: "API (Entry Point)",
      score: 800
    },
    {
      caption: "NativeModules",
      snippet: "const { ${1:ModuleName} } = NativeModules;",
      meta: "API",
      score: 800
    },
    {
      caption: "Systrace.beginEvent",
      snippet:
        "Systrace.beginEvent('${1:EventName}');\n${2}\nSystrace.endEvent();",
      meta: "Performance",
      score: 800
    },
    {
      caption: "Transforms",
      snippet:
        "transform: [\n\t{ rotate: '${1:45deg}' },\n\t{ scale: ${2:1} },\n\t{ translateX: ${3:0} }\n]",
      meta: "Style",
      score: 800
    },
    {
      caption: "UIManager.dispatchViewManagerCommand",
      snippet:
        "UIManager.dispatchViewManagerCommand(\n\tfindNodeHandle(${1:ref}),\n\t'${2:commandName}',\n\t[${3:args}]\n);",
      meta: "API (Advanced)",
      score: 800
    },

    // ====================
    // EXPO IMPORTS
    // ====================
    {
      caption: "import Accelerometer",
      snippet: "import { Accelerometer } from 'expo-sensors';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import AppIntegrity",
      snippet: "import { AppIntegrity } from 'expo-app-integrity';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import AppleAuthentication",
      snippet:
        "import * as AppleAuthentication from 'expo-apple-authentication';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Application",
      snippet: "import * as Application from 'expo-application';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Asset",
      snippet: "import { Asset } from 'expo-asset';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Audio",
      snippet: "import { Audio } from 'expo-audio';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import AuthSession",
      snippet: "import * as AuthSession from 'expo-auth-session';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import BackgroundFetch",
      snippet: "import * as BackgroundFetch from 'expo-background-fetch';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import BackgroundTask",
      snippet: "import * as BackgroundTask from 'expo-background-task';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Barometer",
      snippet: "import { Barometer } from 'expo-sensors';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Battery",
      snippet: "import * as Battery from 'expo-battery';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import BlurView",
      snippet: "import { BlurView } from 'expo-blur';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Brightness",
      snippet: "import * as Brightness from 'expo-brightness';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Calendar",
      snippet: "import * as Calendar from 'expo-calendar';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Camera",
      snippet: "import { Camera } from 'expo-camera';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Cellular",
      snippet: "import * as Cellular from 'expo-cellular';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Checkbox",
      snippet: "import Checkbox from 'expo-checkbox';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Clipboard",
      snippet: "import * as Clipboard from 'expo-clipboard';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Constants",
      snippet: "import Constants from 'expo-constants';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Contacts",
      snippet: "import * as Contacts from 'expo-contacts';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Crypto",
      snippet: "import * as Crypto from 'expo-crypto';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import DevClient",
      snippet: "import 'expo-dev-client';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Device",
      snippet: "import * as Device from 'expo-device';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import DeviceMotion",
      snippet: "import { DeviceMotion } from 'expo-sensors';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import DocumentPicker",
      snippet: "import * as DocumentPicker from 'expo-document-picker';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import FileSystem",
      snippet: "import * as FileSystem from 'expo-file-system';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Fingerprint",
      snippet: "import * as Fingerprint from 'expo-fingerprint';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Font",
      snippet: "import * as Font from 'expo-font';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import GLView",
      snippet: "import { GLView } from 'expo-gl';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Gyroscope",
      snippet: "import { Gyroscope } from 'expo-sensors';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Haptics",
      snippet: "import * as Haptics from 'expo-haptics';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Image",
      snippet: "import { Image } from 'expo-image';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import ImageManipulator",
      snippet: "import * as ImageManipulator from 'expo-image-manipulator';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import ImagePicker",
      snippet: "import * as ImagePicker from 'expo-image-picker';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import IntentLauncher",
      snippet: "import * as IntentLauncher from 'expo-intent-launcher';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import KeepAwake",
      snippet: "import { useKeepAwake } from 'expo-keep-awake';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import LightSensor",
      snippet: "import { LightSensor } from 'expo-sensors';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import LinearGradient",
      snippet: "import { LinearGradient } from 'expo-linear-gradient';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Linking",
      snippet: "import * as Linking from 'expo-linking';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import LocalAuthentication",
      snippet:
        "import * as LocalAuthentication from 'expo-local-authentication';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Localization",
      snippet: "import * as Localization from 'expo-localization';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Location",
      snippet: "import * as Location from 'expo-location';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Magnetometer",
      snippet: "import { Magnetometer } from 'expo-sensors';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import MailComposer",
      snippet: "import * as MailComposer from 'expo-mail-composer';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Maps",
      snippet: "import MapView from 'expo-maps';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import MediaLibrary",
      snippet: "import * as MediaLibrary from 'expo-media-library';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import NavigationBar",
      snippet: "import * as NavigationBar from 'expo-navigation-bar';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Network",
      snippet: "import * as Network from 'expo-network';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Notifications",
      snippet: "import * as Notifications from 'expo-notifications';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Pedometer",
      snippet: "import { Pedometer } from 'expo-sensors';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Print",
      snippet: "import * as Print from 'expo-print';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import ScreenCapture",
      snippet: "import * as ScreenCapture from 'expo-screen-capture';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import ScreenOrientation",
      snippet: "import * as ScreenOrientation from 'expo-screen-orientation';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import SecureStore",
      snippet: "import * as SecureStore from 'expo-secure-store';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Sharing",
      snippet: "import * as Sharing from 'expo-sharing';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import SMS",
      snippet: "import * as SMS from 'expo-sms';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Speech",
      snippet: "import * as Speech from 'expo-speech';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import SplashScreen",
      snippet: "import * as SplashScreen from 'expo-splash-screen';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import SQLite",
      snippet: "import * as SQLite from 'expo-sqlite';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import StatusBar",
      snippet: "import { StatusBar } from 'expo-status-bar';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import StoreReview",
      snippet: "import * as StoreReview from 'expo-store-review';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Symbols",
      snippet: "import { SymbolView } from 'expo-symbols';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import SystemUI",
      snippet: "import * as SystemUI from 'expo-system-ui';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import TaskManager",
      snippet: "import * as TaskManager from 'expo-task-manager';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import TrackingTransparency",
      snippet:
        "import * as TrackingTransparency from 'expo-tracking-transparency';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Updates",
      snippet: "import * as Updates from 'expo-updates';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Video",
      snippet: "import { Video } from 'expo-video';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import VideoThumbnails",
      snippet: "import * as VideoThumbnails from 'expo-video-thumbnails';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import WebBrowser",
      snippet: "import * as WebBrowser from 'expo-web-browser';",
      meta: "Expo Import",
      score: 800
    },
    {
      caption: "import Widgets",
      snippet: "import * as Widgets from 'expo-widgets';",
      meta: "Expo Import",
      score: 800
    },

    // EXPO COMPONENTS
    // ====================
    // EXPO SENSORS & HARDWARE (SENSÖRLER VE DONANIM)
    // ====================
    {
      caption: "Accelerometer.addListener",
      snippet:
        "const subscription = Accelerometer.addListener(${1:accelerometerData} => {\n\t${2:console.log(accelerometerData);}\n});\n// Kapatmak için: subscription.remove();",
      meta: "Expo Sensor",
      score: 850
    },
    {
      caption: "Battery.getBatteryLevel",
      snippet:
        "const getBattery = async () => {\n\tconst batteryLevel = await Battery.getBatteryLevelAsync();\n\t${1:console.log(`Pil seviyesi: ${batteryLevel * 100}%`);}\n};",
      meta: "Expo Hardware",
      score: 850
    },
    {
      caption: "Brightness.setBrightness",
      snippet:
        "const changeBrightness = async () => {\n\tconst { status } = await Brightness.requestPermissionsAsync();\n\tif (status === 'granted') {\n\t\tawait Brightness.setSystemBrightnessAsync(${1:0.5}); // 0 ile 1 arası\n\t}\n};",
      meta: "Expo Hardware",
      score: 850
    },
    {
      caption: "Cellular.getCellularGeneration",
      snippet:
        "const getCellularInfo = async () => {\n\tconst generation = await Cellular.getCellularGenerationAsync();\n\t${1:console.log(`Ağ Tipi: ${generation}`);}\n};",
      meta: "Expo Hardware",
      score: 850
    },
    {
      caption: "Haptics.impact",
      snippet:
        "Haptics.impactAsync(Haptics.ImpactFeedbackStyle.${1:Light}); // Light, Medium, Heavy",
      meta: "Expo Hardware",
      score: 850
    },
    {
      caption: "Haptics.notification",
      snippet:
        "Haptics.notificationAsync(Haptics.NotificationFeedbackType.${1:Success}); // Success, Warning, Error",
      meta: "Expo Hardware",
      score: 850
    },

    // ====================
    // EXPO MEDIA & CAMERA (MEDYA VE KAMERA)
    // ====================
    {
      caption: "Audio.Sound.createAsync",
      snippet:
        "const playSound = async () => {\n\tconst { sound } = await Audio.Sound.createAsync(\n\t\trequire('${1:./assets/sound.mp3}')\n\t);\n\tawait sound.playAsync();\n};",
      meta: "Expo Media",
      score: 850
    },
    {
      caption: "Camera",
      snippet:
        "<Camera \n\tstyle={{ flex: 1 }}\n\ttype={Camera.Constants.Type.${1:back}}\n\tflashMode={Camera.Constants.FlashMode.${2:off}}\n\tref={${3:cameraRef}}\n>\n\t${4}\n</Camera>",
      meta: "Expo Component",
      score: 850
    },
    {
      caption: "Image",
      snippet:
        '<Image\n\tstyle={styles.${1:image}}\n\tsource="${2:https://picsum.photos/seed/696/3000/2000}"\n\tcontentFit="${3:cover}" // cover, contain, fill, none, scale-down\n\ttransition={${4:850}}\n/>',
      meta: "Expo Component",
      score: 850
    },
    {
      caption: "ImagePicker.launchImageLibrary",
      snippet:
        "const pickImage = async () => {\n\tlet result = await ImagePicker.launchImageLibraryAsync({\n\t\tmediaTypes: ImagePicker.MediaTypeOptions.${1:All}, // All, Images, Videos\n\t\tallowsEditing: ${2:true},\n\t\taspect: [${3:4}, ${4:3}],\n\t\tquality: ${5:1},\n\t});\n\n\tif (!result.canceled) {\n\t\t${6:setImage(result.assets[0].uri);}\n\t}\n};",
      meta: "Expo Media",
      score: 850
    },
    {
      caption: "MediaLibrary.saveToLibrary",
      snippet:
        "const saveFile = async (fileUri) => {\n\tconst { status } = await MediaLibrary.requestPermissionsAsync();\n\tif (status === 'granted') {\n\t\tconst asset = await MediaLibrary.createAssetAsync(${1:fileUri});\n\t\tawait MediaLibrary.createAlbumAsync('${2:Download}', asset, false);\n\t}\n};",
      meta: "Expo Media",
      score: 850
    },
    {
      caption: "Video",
      snippet:
        "<Video\n\tref={${1:videoRef}}\n\tstyle={styles.${2:video}}\n\tsource={{ uri: '${3:http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4}' }}\n\tuseNativeControls={${4:true}}\n\tresizeMode=\"${5:contain}\"\n\tisLooping={${6:false}}\n/>",
      meta: "Expo Component",
      score: 850
    },

    // ====================
    // EXPO SYSTEM & FILE (SİSTEM VE DOSYA İŞLEMLERİ)
    // ====================
    {
      caption: "Clipboard.setString",
      snippet:
        "const copyToClipboard = async () => {\n\tawait Clipboard.setStringAsync('${1:Kopyalanacak Metin}');\n};",
      meta: "Expo System",
      score: 850
    },
    {
      caption: "DocumentPicker.getDocument",
      snippet:
        "const pickDocument = async () => {\n\tconst result = await DocumentPicker.getDocumentAsync({\n\t\ttype: '${1:*/*}', // örn: 'application/pdf'\n\t\tcopyToCacheDirectory: ${2:true},\n\t});\n\n\tif (result.type === 'success') {\n\t\t${3:console.log(result.uri);}\n\t}\n};",
      meta: "Expo System",
      score: 850
    },
    {
      caption: "FileSystem.readAsString",
      snippet:
        "const readFile = async () => {\n\tconst fileUri = FileSystem.documentDirectory + '${1:file.txt}';\n\tconst content = await FileSystem.readAsStringAsync(fileUri, {\n\t\tencoding: FileSystem.EncodingType.${2:UTF8}\n\t});\n\t${3:console.log(content);}\n};",
      meta: "Expo System",
      score: 850
    },
    {
      caption: "Linking.openURL",
      snippet:
        "const openLink = async () => {\n\tconst url = '${1:https://expo.dev}';\n\tconst supported = await Linking.canOpenURL(url);\n\tif (supported) {\n\t\tawait Linking.openURL(url);\n\t} else {\n\t\tAlert.alert('Bağlantı açılamıyor');\n\t}\n};",
      meta: "Expo System",
      score: 850
    },
    {
      caption: "SecureStore.setItem",
      snippet:
        "const saveSecure = async (key, value) => {\n\tawait SecureStore.setItemAsync(${1:key}, ${2:value});\n};",
      meta: "Expo Security",
      score: 850
    },
    {
      caption: "SecureStore.getItem",
      snippet:
        "const getSecure = async (key) => {\n\tlet result = await SecureStore.getItemAsync(${1:key});\n\tif (result) {\n\t\t${2:console.log(result);}\n\t}\n};",
      meta: "Expo Security",
      score: 850
    },
    {
      caption: "Sharing.share",
      snippet:
        "const shareFile = async (fileUri) => {\n\tconst isAvailable = await Sharing.isAvailableAsync();\n\tif (isAvailable) {\n\t\tawait Sharing.shareAsync(${1:fileUri});\n\t}\n};",
      meta: "Expo System",
      score: 850
    },
    {
      caption: "WebBrowser.openBrowser",
      snippet:
        "const openBrowser = async () => {\n\tawait WebBrowser.openBrowserAsync('${1:https://google.com}');\n};",
      meta: "Expo System",
      score: 850
    },

    // ====================
    // EXPO UI & VISUALS (ARAYÜZ VE GÖRSELLİK)
    // ====================
    {
      caption: "BlurView",
      snippet:
        '<BlurView \n\tintensity={${1:50}} \n\ttint="${2:light}" // light, dark, default\n\tstyle={StyleSheet.absoluteFill}\n>\n\t${3}\n</BlurView>',
      meta: "Expo Component",
      score: 850
    },
    {
      caption: "Checkbox",
      snippet:
        "<Checkbox\n\tvalue={${1:isChecked}}\n\tonValueChange={${2:setChecked}}\n\tcolor={${1:isChecked} ? '${3:#4630EB}' : undefined}\n/>",
      meta: "Expo Component",
      score: 850
    },
    {
      caption: "LinearGradient",
      snippet:
        "<LinearGradient\n\tcolors={['${1:#4c669f}', '${2:#3b5998}', '${3:#192f6a}']}\n\tstyle={styles.${4:background}}\n\tstart={{ x: ${5:0}, y: ${6:0} }}\n\tend={{ x: ${7:1}, y: ${8:1} }}\n>\n\t${9}\n</LinearGradient>",
      meta: "Expo Component",
      score: 850
    },
    {
      caption: "StatusBar",
      snippet:
        '<StatusBar \n\tstyle="${1:auto}" // auto, light, dark, inverted\n\tbackgroundColor="${2:#ffffff}"\n/>',
      meta: "Expo Component",
      score: 850
    },

    // ====================
    // EXPO DEVICE & LOCATION (CİHAZ VE KONUM)
    // ====================
    {
      caption: "Constants.expoConfig",
      snippet:
        "const appName = Constants.expoConfig.name;\nconst appVersion = Constants.expoConfig.version;",
      meta: "Expo Constant",
      score: 850
    },
    {
      caption: "Device.brand",
      snippet:
        "const deviceBrand = Device.brand;\nconst deviceName = Device.deviceName;",
      meta: "Expo Device",
      score: 850
    },
    {
      caption: "Location.getCurrentPosition",
      snippet:
        "const getLocation = async () => {\n\tlet { status } = await Location.requestForegroundPermissionsAsync();\n\tif (status !== 'granted') {\n\t\tAlert.alert('İzin reddedildi');\n\t\treturn;\n\t}\n\n\tlet location = await Location.getCurrentPositionAsync({});\n\t${1:console.log(location.coords.latitude, location.coords.longitude);}\n};",
      meta: "Expo Location",
      score: 850
    },
    {
      caption: "MapView",
      snippet:
        "<MapView\n\tstyle={{ flex: 1 }}\n\tinitialRegion={{\n\t\tlatitude: ${1:37.78825},\n\t\tlongitude: ${2:-122.4324},\n\t\tlatitudeDelta: ${3:0.0922},\n\t\tlongitudeDelta: ${4:0.0421},\n\t}}\n>\n\t<Marker coordinate={{ latitude: ${1:37.78825}, longitude: ${2:-122.4324} }} />\n</MapView>",
      meta: "Expo Component",
      score: 850
    },

    // ====================
    // EXPO SERVICES & COMM (SERVİSLER VE İLETİŞİM)
    // ====================
    {
      caption: "AuthSession.startAsync",
      snippet:
        "const loginWithAuth = async () => {\n\tconst result = await AuthSession.startAsync({\n\t\tauthUrl: '${1:https://yourauthserver.com/login}'\n\t});\n\n\tif (result.type === 'success') {\n\t\t${2:console.log(result.params);}\n\t}\n};",
      meta: "Expo Auth",
      score: 850
    },
    {
      caption: "LocalAuthentication.authenticate",
      snippet:
        "const authenticateUser = async () => {\n\tconst hasHardware = await LocalAuthentication.hasHardwareAsync();\n\tif (hasHardware) {\n\t\tconst result = await LocalAuthentication.authenticateAsync({\n\t\t\tpromptMessage: '${1:Giriş yapmak için doğrulayın}'\n\t\t});\n\t\t${2:console.log(result.success);}\n\t}\n};",
      meta: "Expo Security",
      score: 850
    },
    {
      caption: "MailComposer.composeAsync",
      snippet:
        "const sendEmail = async () => {\n\tawait MailComposer.composeAsync({\n\t\trecipients: ['${1:test@example.com}'],\n\t\tsubject: '${2:Konu Başlığı}',\n\t\tbody: '${3:E-posta içeriği buraya gelecek.}',\n\t});\n};",
      meta: "Expo Service",
      score: 850
    },
    {
      caption: "Notifications.scheduleNotification",
      snippet:
        "const schedulePushNotification = async () => {\n\tawait Notifications.scheduleNotificationAsync({\n\t\tcontent: {\n\t\t\ttitle: \"${1:Bildirim Başlığı} 📬\",\n\t\t\tbody: '${2:Bildirim içeriği}',\n\t\t\tdata: { ${3:data: 'goes here'} },\n\t\t},\n\t\ttrigger: { seconds: ${4:2} },\n\t});\n};",
      meta: "Expo Notification",
      score: 850
    },
    {
      caption: "Print.printAsync",
      snippet:
        "const printDocument = async () => {\n\tconst html = `<h1>${1:Yazdırılacak İçerik}</h1>`;\n\tawait Print.printAsync({\n\t\thtml,\n\t});\n};",
      meta: "Expo Service",
      score: 850
    },
    {
      caption: "SMS.sendSMSAsync",
      snippet:
        "const sendSms = async () => {\n\tconst isAvailable = await SMS.isAvailableAsync();\n\tif (isAvailable) {\n\t\tconst { result } = await SMS.sendSMSAsync(\n\t\t\t['${1:05551234567}'],\n\t\t\t'${2:Mesaj içeriği buraya yazılır}'\n\t\t);\n\t}\n};",
      meta: "Expo Service",
      score: 850
    },
    {
      caption: "Speech.speak",
      snippet:
        "const speakText = () => {\n\tSpeech.speak('${1:Söylenecek metin}', {\n\t\tlanguage: '${2:tr-TR}',\n\t\tpitch: ${3:1},\n\t\trate: ${4:1}\n\t});\n};",
      meta: "Expo Service",
      score: 850
    },

    // EXPO Others
    {
      caption: "SQLite.openDatabaseSync",
      snippet:
        "const db = SQLite.openDatabaseSync('${1:myDatabase.db}');\n// Örnek kullanım:\n// const allRows = db.getAllSync('SELECT * FROM users');",
      meta: "Expo Database",
      score: 800
    },
    {
      caption: "AppIntegrity.getIntegrityTokenAsync",
      snippet:
        "const token = await AppIntegrity.getIntegrityTokenAsync({\n\tcloudProjectNumber: ${1:123456789}\n});",
      meta: "Expo AppIntegrity",
      score: 800
    },
    {
      caption: "AppleAuthentication.AppleAuthenticationButton",
      snippet:
        "<AppleAuthentication.AppleAuthenticationButton\n\tbuttonType={AppleAuthentication.AppleAuthenticationButtonType.${1:SIGN_IN}} // SIGN_IN, SIGN_UP, CONTINUE\n\tbuttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.${2:BLACK}} // BLACK, WHITE, WHITE_OUTLINE\n\tcornerRadius={${3:5}}\n\tstyle={styles.${4:appleButton}}\n\tonPress={async () => {\n\t\ttry {\n\t\t\tconst credential = await AppleAuthentication.signInAsync({\n\t\t\t\trequestedScopes: [\n\t\t\t\t\tAppleAuthentication.AppleAuthenticationScope.FULL_NAME,\n\t\t\t\t\tAppleAuthentication.AppleAuthenticationScope.EMAIL,\n\t\t\t\t],\n\t\t\t});\n\t\t} catch (e) {\n\t\t\tconsole.log(e);\n\t\t}\n\t}}\n/>",
      meta: "Expo AppleAuth",
      score: 800
    },
    {
      caption: "Application",
      snippet:
        "const appInfo = {\n\tandroidId: Application.androidId,\n\tapplicationId: Application.applicationId,\n\tapplicationName: Application.applicationName,\n\tversion: Application.nativeApplicationVersion,\n\tbuildVersion: Application.nativeBuildVersion\n};",
      meta: "Expo Application",
      score: 800
    },
    {
      caption: "Asset.fromModule",
      snippet:
        "const asset = Asset.fromModule(require('${1:./assets/image.png}'));\nawait asset.downloadAsync();",
      meta: "Expo Asset",
      score: 800
    },
    {
      caption: "BackgroundFetch.registerTaskAsync",
      snippet:
        "await BackgroundFetch.registerTaskAsync('${1:TASK_NAME}', {\n\tminimumInterval: ${2:15} * 60, // Saniye cinsinden (Örn: 15 Dk)\n\tstopOnTerminate: ${3:false},\n\tstartOnBoot: ${4:true},\n});",
      meta: "Expo BackgroundFetch",
      score: 800
    },
    {
      caption: "BackgroundTask",
      snippet:
        "TaskManager.defineTask('${1:TASK_NAME}', async ({ data, error }) => {\n\tif (error) return;\n\t${2:// Arka plan kodlarınızı buraya yazın}\n});",
      meta: "Expo BackgroundTask",
      score: 800
    },
    {
      caption: "Barometer.addListener",
      snippet:
        "Barometer.setUpdateInterval(${1:1150});\nconst sub = Barometer.addListener(${2:data} => {\n\tconsole.log('Basınç: ' + ${2:data}.pressure + ' Rakım: ' + ${2:data}.relativeAltitude);\n});",
      meta: "Expo Barometer",
      score: 800
    },
    {
      caption: "Calendar.createCalendarAsync",
      snippet:
        "const calendarId = await Calendar.createCalendarAsync({\n\ttitle: '${1:Takvim Başlığı}',\n\tcolor: '${2:#0000FF}',\n\tentityType: Calendar.EntityTypes.EVENT,\n\tsourceId: ${3:sourceId},\n\tsource: ${4:source},\n\tname: '${5:internalName}',\n\tonerAccount: '${6:accountName}',\n\taccessLevel: Calendar.CalendarAccessLevel.OWNER,\n});",
      meta: "Expo Calendar",
      score: 800
    },
    {
      caption: "Contacts.getContactsAsync",
      snippet:
        "const { data } = await Contacts.getContactsAsync({\n\tfields: [Contacts.Fields.${1:PhoneNumbers}, Contacts.Fields.${2:Emails}],\n\tpageSize: ${3:100},\n\tpageOffset: ${4:0},\n\tsort: Contacts.SortOrder.${5:FirstName}, // FirstName, LastName, None\n});",
      meta: "Expo Contacts",
      score: 800
    },
    {
      caption: "Crypto.digestStringAsync",
      snippet:
        "const hash = await Crypto.digestStringAsync(\n\tCrypto.CryptoDigestAlgorithm.${1:SHA256}, // SHA1, SHA256, SHA512, MD5\n\t'${2:SifrelenecekMetin}',\n\t{ encoding: Crypto.CryptoEncoding.${3:HEX} } // HEX, BASE64\n);",
      meta: "Expo Crypto",
      score: 800
    },
    {
      caption: "DevClient",
      snippet:
        "import 'expo-dev-client';\n// Özel geliştirici sürümü (development build) oluşturma kök tetikleyicisi",
      meta: "Expo DevClient",
      score: 800
    },
    {
      caption: "DeviceMotion.addListener",
      snippet:
        "DeviceMotion.setUpdateInterval(${1:1150});\nconst sub = DeviceMotion.addListener(${2:motion} => {\n\tconsole.log(${2:motion}.acceleration, ${2:motion}.rotation, ${2:motion}.orientation);\n});",
      meta: "Expo DeviceMotion",
      score: 800
    },
    {
      caption: "Fingerprint.authenticateAsync",
      snippet:
        "const result = await Fingerprint.authenticateAsync({\n\tpromptMessage: '${1:Kimliğinizi Doğrulayın}',\n\tcancelButtonLabel: '${2:İptal}',\n\tdisableBackup: ${3:false},\n\tfallbackLabel: '${4:Şifre Kullan}',\n});",
      meta: "Expo Fingerprint",
      score: 800
    },
    {
      caption: "Font.loadAsync",
      snippet:
        "await Font.loadAsync({\n\t'${1:CustomFontName}': require('${2:./assets/fonts/custom.ttf}'),\n});",
      meta: "Expo Font",
      score: 800
    },
    {
      caption: "GLView",
      snippet:
        "<GLView\n\tstyle={{ flex: ${1:1} }}\n\tonContextCreate={async (${2:gl}) => {\n\t\t${3:// WebGL / Expo-GL grafik render kodları}\n\t}}\n/>",
      meta: "Expo GLView",
      score: 800
    },
    {
      caption: "Gyroscope.addListener",
      snippet:
        "Gyroscope.setUpdateInterval(${1:1150});\nconst sub = Gyroscope.addListener(${2:data} => {\n\tconsole.log('X: ' + ${2:data}.x + ' Y: ' + ${2:data}.y + ' Z: ' + ${2:data}.z);\n});",
      meta: "Expo Gyroscope",
      score: 800
    },
    {
      caption: "ImageManipulator.manipulateAsync",
      snippet:
        "const result = await ImageManipulator.manipulateAsync(\n\t${1:imageUri},\n\t[\n\t\t{ resize: { width: ${2:800}, height: ${3:600} } },\n\t\t{ rotate: ${4:90} }, // Derece\n\t\t{ flip: ImageManipulator.FlipType.${5:Vertical} }, // Vertical, Horizontal\n\t\t{ crop: { originX: ${6:0}, originY: ${7:0}, width: ${8:200}, height: ${9:200} } }\n\t],\n\t{ compress: ${10:0.8}, format: ImageManipulator.SaveFormat.${11:JPEG} } // JPEG, PNG, WEBP\n);",
      meta: "Expo ImageManipulator",
      score: 800
    },
    {
      caption: "IntentLauncher.startActivityAsync",
      snippet:
        "if (Platform.OS === 'android') {\n\tawait IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.${1:ACTION_SETTINGS}, {\n\t\tdata: '${2:package:com.example.app}',\n\t\tflags: ${3:0},\n\t});\n}",
      meta: "Expo IntentLauncher",
      score: 800
    },
    {
      caption: "KeepAwake (Async)",
      snippet:
        "await KeepAwake.activateKeepAwakeAsync('${1:tag}');\n// Kapatmak için: await KeepAwake.deactivateKeepAwakeAsync('${1:tag}');",
      meta: "Expo KeepAwake",
      score: 800
    },
    {
      caption: "LightSensor.addListener",
      snippet:
        "LightSensor.setUpdateInterval(${1:1150});\nconst sub = LightSensor.addListener(({ illuminance }) => {\n\tconsole.log(`Işık Yoğunluğu: \${illuminance} lux`);\n});",
      meta: "Expo LightSensor",
      score: 800
    },
    {
      caption: "Localization",
      snippet:
        "const locales = Localization.getLocales();\nconst calendars = Localization.getCalendars();\nconst timezone = Localization.timezone;",
      meta: "Expo Localization",
      score: 800
    },
    {
      caption: "Magnetometer.addListener",
      snippet:
        "Magnetometer.setUpdateInterval(${1:1150});\nconst sub = Magnetometer.addListener(${2:data} => {\n\tconsole.log('Mag X: ' + ${2:data}.x + ' Y: ' + ${2:data}.y);\n});",
      meta: "Expo Magnetometer",
      score: 800
    },
    {
      caption: "NavigationBar",
      snippet:
        "if (Platform.OS === 'android') {\n\tawait NavigationBar.setBackgroundColorAsync('${1:#ffffff}');\n\tawait NavigationBar.setButtonStyleAsync('${2:dark}'); // dark, light\n\tawait NavigationBar.setVisibilityAsync('${3:visible}'); // visible, hidden\n}",
      meta: "Expo NavigationBar",
      score: 800
    },
    {
      caption: "Network.getNetworkStateAsync",
      snippet:
        "const state = await Network.getNetworkStateAsync();\nconsole.log(`Tip: \${state.type}, Bağlı mı: \${state.isConnected}, İnternet var mı: \${state.isInternetReachable}`);",
      meta: "Expo Network",
      score: 800
    },
    {
      caption: "Pedometer.watchStepCount",
      snippet:
        "const isAvailable = await Pedometer.isAvailableAsync();\nif (isAvailable) {\n\tconst sub = Pedometer.watchStepCount(${1:result} => {\n\t\tconsole.log(`Adımlar: \${${1:result}.steps}`);\n\t});\n}",
      meta: "Expo Pedometer",
      score: 800
    },
    {
      caption: "ScreenCapture.preventScreenCaptureAsync",
      snippet:
        "await ScreenCapture.preventScreenCaptureAsync();\n// İptal etmek için: await ScreenCapture.allowScreenCaptureAsync();",
      meta: "Expo ScreenCapture",
      score: 800
    },
    {
      caption: "ScreenOrientation.lockAsync",
      snippet:
        "await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.${1:DEFAULT}); \n// DEFAULT, PORTRAIT_UP, PORTRAIT_DOWN, LANDSCAPE_LEFT, LANDSCAPE_RIGHT",
      meta: "Expo ScreenOrientation",
      score: 800
    },
    {
      caption: "SplashScreen.preventAutoHideAsync",
      snippet:
        "await SplashScreen.preventAutoHideAsync();\n// Yükleme tamamlandığında kapatmak için: await SplashScreen.hideAsync();",
      meta: "Expo SplashScreen",
      score: 800
    },
    {
      caption: "StoreReview.requestReview",
      snippet:
        "if (await StoreReview.hasAction()) {\n\tawait StoreReview.requestReview();\n}",
      meta: "Expo StoreReview",
      score: 800
    },
    {
      caption: "SymbolView",
      snippet:
        '<SymbolView\n\tname="${1:house.fill}" // Apple SF Symbols adı\n\tsize={${2:24}}\n\ttintColor="${3:#007AFF}"\n\tresizeMode="${4:scaleAspectFit}" // scaleAspectFit, scaleAspectFill, scaleToFill\n/>',
      meta: "Expo Symbols Component",
      score: 800
    },
    {
      caption: "SystemUI.setBackgroundColorAsync",
      snippet: "await SystemUI.setBackgroundColorAsync('${1:#ffffff}');",
      meta: "Expo SystemUI",
      score: 800
    },
    {
      caption: "TaskManager.isTaskRegisteredAsync",
      snippet:
        "const isRegistered = await TaskManager.isTaskRegisteredAsync('${1:TASK_NAME}');\nif (isRegistered) {\n\tawait TaskManager.unregisterTaskAsync('${1:TASK_NAME}');\n}",
      meta: "Expo TaskManager",
      score: 800
    },
    {
      caption: "TrackingTransparency.requestTrackingPermissionsAsync",
      snippet:
        "const { status } = await TrackingTransparency.requestTrackingPermissionsAsync();\nif (status === 'granted') {\n\t${1:// Reklam takibine veya veri izlemeye izin verildi}\n}",
      meta: "Expo Tracking",
      score: 800
    },
    {
      caption: "Updates.checkForUpdateAsync",
      snippet:
        "const update = await Updates.checkForUpdateAsync();\nif (update.isAvailable) {\n\tawait Updates.fetchUpdateAsync();\n\tawait Updates.reloadAsync();\n}",
      meta: "Expo Updates (OTA)",
      score: 800
    },
    {
      caption: "VideoThumbnails.getThumbnailAsync",
      snippet:
        "const { uri, width, height } = await VideoThumbnails.getThumbnailAsync(\n\t'${1:videoUri}',\n\t{ time: ${2:0}, quality: ${3:1.0} }\n);",
      meta: "Expo VideoThumbnails",
      score: 800
    },
    {
      caption: "Widgets",
      snippet:
        '[\n\t"expo-widgets",\n\t{\n\t\t"widgets": [\n\t\t\t{\n\t\t\t\t"name": "${1:MyWidget}",\n\t\t\t\t"targetName": "${1:MyWidget}Target"\n\t\t\t}\n\t\t]\n\t}\n]',
      meta: "Expo Widgets Config",
      score: 800
    },

    // CONSOLE METHODS

    {
      caption: "console.log",
      snippet: "console.log(${1:object});",
      meta: "Console",
      score: 710
    },
    {
      caption: "console.error",
      snippet: "console.error(${1:error});",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.warn",
      snippet: "console.warn(${1:message});",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.info",
      snippet: "console.info(${1:message});",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.debug",
      snippet: "console.debug(${1:message});",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.table",
      snippet: "console.table(${1:arrayOrObject});",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.clear",
      snippet: "console.clear();",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.time",
      snippet:
        "console.time('${1:label}');\n${2}\nconsole.timeEnd('${1:label}');",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.timeLog",
      snippet: "console.timeLog('${1:label}');",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.group",
      snippet: "console.group('${1:label}');\n${2}\nconsole.groupEnd();",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.groupCollapsed",
      snippet:
        "console.groupCollapsed('${1:label}');\n${2}\nconsole.groupEnd();",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.trace",
      snippet: "console.trace('${1:label}');",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.assert",
      snippet: "console.assert(${1:condition}, '${2:error message}');",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.count",
      snippet: "console.count('${1:label}');",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.countReset",
      snippet: "console.countReset('${1:label}');",
      meta: "Console",
      score: 700
    },
    {
      caption: "console.dir",
      snippet:
        "console.dir(${1:object}, { depth: ${2:null}, colors: ${3:true} });",
      meta: "Console",
      score: 700
    }
  ];
}
