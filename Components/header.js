class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                width: 200px;
                background-color: #f1f1f1;
            }
        
            li a {
                display: block;
                color: #000;
                padding: 8px 16px;
                text-decoration: none;
            }
        
            li a:hover {
                background-color: #555;
                color: white;
            }
        
            li a.active {
                background-color: #04AA6D;
                color: green;
            }
          </style>
          <header>
            <nav>
                <ul>
                    <li class="nav"><a href="../Pages/ControlFlowPage.html" target="_blank">Control flow practice</a></li>
                    <li class="nav"><a href="../Pages/OperatorsPage.html" target="_blank">Operators practice</a></li>
                    <li class="nav"><a href="../Pages/ArraysPage.html" target="_blank">Arrays practice</a></li>
                    <li class="nav"><a href="../Pages/ArrayMethods.html" target="_blank">Array methods practice</a></li>
                    <li class="nav"><a href="../Pages/ObjectsPage.html" target="_blank">Objects practice</a></li>
                    <li class="nav"><a href="../Pages/FunctionsPage.html" target="_blank">Functions practice</a></li>
                    <li class="nav"><a href="../Pages/UserInteractionPage.html" target="_blank">User interaction practice</a></li>
                    <li class="nav"><a href="../Pages/TransformTypesToPrimitives.html" target="_blank">Types to primitives practice</a></li>
                    <li class="nav"><a href="../Pages/Recursion.html" target="_blank">Recursion practice</a></li>
                    <li class="nav"><a href="../Pages/NamedFunctionExpression.html" target="_blank">Named Function Expression</a></li>
                    <li class="nav"><a href="../Pages/TestPage.html" target="_blank">Test Page</a></li>
                    <li class="nav"><a href="../Pages/DateTime.html" target="_blank">Date and Time Page</a></li>
                    <li class="nav"><a href="../Pages/JsonParseExample.html" target="_blank">Parse Json</a></li>
                    <li class="nav"><a href="../Pages/MathFunctions.html" target="_blank">Math round functions</a></li>
                    <li class="nav"><a href="../Pages/StringPractice.html" target="_blank">Hamburger task solution</a></li>
                    <li class="nav"><a href="../Pages/HomeTasks.html" target="_blank">Home tasks</a></li>
                </ul>
            </nav>
          </header>
        `;
      }
}

customElements.define('header-component', Header);