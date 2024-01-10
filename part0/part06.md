sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created.
    deactivate server

![PART06](https://github.com/vjfdez/FullStackOpen/assets/68879881/c1594550-c38d-49fb-8d40-fd259f2e7188)
