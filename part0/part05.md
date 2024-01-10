sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JS document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON document
    deactivate server
    
![part054](https://github.com/vjfdez/FullStackOpen/assets/68879881/f33e6913-579e-4296-b861-58317157b2fc)
![part053](https://github.com/vjfdez/FullStackOpen/assets/68879881/5268ae4c-6d1f-40d1-8c04-d4c211df6459)
![part052](https://github.com/vjfdez/FullStackOpen/assets/68879881/69eea7c8-f200-4574-b6e0-ee84d46b5a26)
![PART051](https://github.com/vjfdez/FullStackOpen/assets/68879881/4e3c05cc-37e4-4def-89e1-787d12bd210a)
