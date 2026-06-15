# React Native Snippets

<p align="center">
  <a href="https://github.com/jaxorblue/acode-plugins-reactNative-snippets/stargazers">
  <img src="https://img.shields.io/github/stars/jaxorblue/acode-plugins-reactNative-snippets?colorA=363a4f&colorB=ffcc15&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij4KPHBhdGggZD0iTTIzNS4yNCw4NC4zOGwtMjguMDYsMjMuNjgsOC41NiwzNS4zOWExMy4zNCwxMy4zNCwwLDAsMS01LjA5LDEzLjkxLDEzLjU0LDEzLjU0LDAsMCwxLTE1LC42OUwxNjQsMTM5bC0zMS42NSwxOS4wNmExMy41MSwxMy41MSwwLDAsMS0xNS0uNjksMTMuMzIsMTMuMzIsMCwwLDEtNS4xLTEzLjkxbDguNTYtMzUuMzlMOTIuNzYsODQuMzhhMTMuMzksMTMuMzksMCwwLDEsNy42Ni0yMy41OGwzNi45NC0yLjkyLDE0LjIxLTMzLjY2YTEzLjUxLDEzLjUxLDAsMCwxLDI0Ljg2LDBsMTQuMjEsMzMuNjYsMzYuOTQsMi45MmExMy4zOSwxMy4zOSwwLDAsMSw3LjY2LDIzLjU4Wk04OC4xMSwxMTEuODlhOCw4LDAsMCwwLTExLjMyLDBMMTguMzQsMTcwLjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmw1OC40NS01OC40NUE4LDgsMCwwLDAsODguMTEsMTExLjg5Wm0tLjUsNjEuMTlMMzQuMzQsMjI2LjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmw1My4yNi01My4yN2E4LDgsMCwwLDAtMTEuMzEtMTEuMzFabTczLTEtNTQuMjksNTQuMjhhOCw4LDAsMCwwLDExLjMyLDExLjMybDU0LjI4LTU0LjI4YTgsOCwwLDAsMC0xMS4zMS0xMS4zMloiIHN0eWxlPSJmaWxsOiAjQ0FEM0Y1OyIvPgo8L3N2Zz4="></a>
  
  <a href="https://github.com/jaxorblue/acode-plugins-reactNative-snippets/issues">
  <img src="https://img.shields.io/github/issues/jaxorblue/acode-plugins-reactNative-snippets?colorA=363a4f&colorB=dd5454&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij4KPHBhdGggZD0iTTIxNiwzMlYxOTJhOCw4LDAsMCwxLTgsOEg3MmExNiwxNiwwLDAsMC0xNiwxNkgxOTJhOCw4LDAsMCwxLDAsMTZINDhhOCw4LDAsMCwxLTgtOFY1NkEzMiwzMiwwLDAsMSw3MiwyNEgyMDhBOCw4LDAsMCwxLDIxNiwzMloiIHN0eWxlPSJmaWxsOiAjQ0FEM0Y1OyIvPgo8L3N2Zz4="></a>
  
</p>

**Acode Plugin** — Automatically provides autocomplete snippets for React Native components in `jsx/tsx` files.

## 🚀 Features

- Snippet autocomplete
- Tab-stop supported snippet expansion (`${1:name}` format)
- File extension–based snippet filtering
- Basic Components
- User Interface Components
- List Views
- Css Styles
- Android-specific Components
- iOS-specific Components
- API snippets 
- Expo Import & Components autocomplete


## 📂 Supported File Types

- `.jsx`
- `.tsx`
- `.js`
- `.ts` 

## 📖 Usage

1. Install the plugin in Acode.
2. Open a JSX, TSX, JS, or TS file.
3. Start with a pre-made template using the `rnfe` **command.**
```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Component = () => {
  return (
    <View style={styles.container}>
      <Text>Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Component;
```
4. Type a snippet prefix (e.g.: `useState`, `text`, `view`).
5. Select a suggestion from the autocomplete list.
6. Use Tab to navigate between placeholder fields.

### Expo Autocomplete (`Import` & `Components`)
---

- When you start typing `Import Document Picker` it will appear in a list of suggestions, and pressing Enter will autocomplete it, as shown in the example below.
 
```jsx
import * as DocumentPicker from 'expo-document-picker 
```

- When you start typing `DocumentPicker.getDocument`, it will appear in the suggestion list, and pressing Enter will autocomplete it as shown in the example below.

```jsx 
const pickDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync({
    type: '*/*', // e.g.: 'application/pdf'
    copyToCacheDirectory: true,
  });

  if (result.type === 'success') {
    console.log(result.uri);
  }
}; 
```

- **And much more...**

## 🐛 Bug Reporting and Contribution

- You can report any bugs you encounter or new feature requests via the GitHub repository (from the Issues tab).

- If you think there are any missing components, please let us know so we can add them.

- If you would like to contribute code, feel free to submit a Pull Request (PR)!

**GitHub Issues `=>`**
[![GitHub](https://img.shields.io/badge/GitHub-jaxorblue-orange?logo=github)](https://github.com/jaxorblue/acode-plugins/issues)


## 🧑‍💻 Author

[![GitHub](https://img.shields.io/badge/GitHub-jaxorblue-orange?logo=github)](https://github.com/jaxorblue)

[![Email](https://img.shields.io/badge/Email-jaxorblue@gmail.com-blue)](mailto:jaxorblue@gmail.com)

### 🌟 Star on GitHub

If you find the React Native Snippets plugin useful, consider giving it a star rating on GitHub. 

It's a simple way to show your appreciation and help others discover the project. Whether through code or a simple star rating, help make the React Native Snippets plugin better for the entire community. 

## License

This project is licensed under the MIT License - see the LICENSE file for details.

❤️ Thank you for your support!
