# JavaScriptBasic

A collection of small, browser-based exercises for practicing core JavaScript concepts: control flow, operators, arrays, objects, functions, recursion, type conversion, dates, JSON and more.

Each topic is a plain HTML page that loads its own script. There is no build step and no dependencies to install — the examples run directly in the browser, and most of the output goes to the DevTools console.

## Project structure

```
JavaScriptBasic/
├── Components/
│   └── header.js        # <header-component> custom element: shared navigation menu
├── Css/                 # Page styles
├── Js/                  # Practice scripts (one per topic)
├── Jsons/
│   └── report.json      # Sample data for the JSON parsing example
└── Pages/               # HTML entry points (one per topic)
```

## Topics

| Page | Script | Topic |
| --- | --- | --- |
| `Pages/ControlFlowPage.html` | `Js/Index_ControlFlow.js` | `if` / `switch` / loops |
| `Pages/OperatorsPage.html` | `Js/Index_Objects.js` | Operators |
| `Pages/ArraysPage.html` | `Js/Index_Arrays.js` | Arrays |
| `Pages/ArrayMethods.html` | `Js/Array_Methods.js` | Array methods (`map`, `filter`, `reduce`, ...) |
| `Pages/ObjectsPage.html` | `Js/Index_Objects.js` | Objects |
| `Pages/FunctionsPage.html` | `Js/Index_Functions.js` | Functions |
| `Pages/UserInteractionPage.html` | `Js/Index_UserInteraction.js` | `alert` / `prompt` / `confirm` |
| `Pages/TransformTypesToPrimitives.html` | `Js/Index_TypesToPrimitives.js` | Type conversion to primitives |
| `Pages/Recursion.html` | `Js/Index_Recursion.js` | Recursion |
| `Pages/NamedFunctionExpression.html` | `Js/NamedFunctionExpression.js` | Named function expressions |
| `Pages/TestPage.html` | `Js/test.js` | Unit testing with Mocha + Chai (loaded from CDN) |
| `Pages/DateTime.html` | `Js/DateAndTime.js` | `Date` and time |
| `Pages/JsonParseExample.html` | `Js/ReadAndParseJson.js` | Loading `Jsons/report.json` with jQuery and rendering it as a table |
| `Pages/MathFunctions.html` | `Js/Random.js` | Math rounding and random numbers |
| `Pages/StringPractice.html` | `Js/HamburgersString.js` | String practice ("Hamburger" task) |
| `Pages/HomeTasks.html` | `Js/HomeTask_RestaurantMenu.js` | Home task: restaurant menu |
| `Pages/Index.html` | `Js/Index.js` | Base page / basics |

Every page includes the shared `<header-component>` from `Components/header.js`, so you can navigate between topics from any page.

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/dneprokos/JavaScriptBasic.git
   cd JavaScriptBasic
   ```

2. Open a page from the `Pages/` folder in your browser, for example `Pages/Index.html`.

3. Open the browser DevTools (F12) and check the **Console** tab, where most examples print their output.

### Running with a local server

`Pages/JsonParseExample.html` loads `Jsons/report.json` with `$.getJSON`, and most browsers block that request when the page is opened from `file://`. Serve the project folder over HTTP instead, for example:

```bash
# Node.js
npx serve .

# or Python 3
python -m http.server 8080
```

Then open `http://localhost:8080/Pages/JsonParseExample.html` (adjust the port to match your server).

The VS Code **Live Server** extension also works.

## Tech

- Vanilla JavaScript (ES6+), HTML, CSS
- [Custom Elements](https://developer.mozilla.org/docs/Web/API/Web_components/Using_custom_elements) for the shared header
- jQuery 3.4.1 (JSON example only, from CDN)
- Mocha 2.1.0 + Chai 2.0.0 (test page only, from CDN)
