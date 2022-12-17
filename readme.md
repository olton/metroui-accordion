# Metro UI Accordion for React

## Install
```shell
npm install -S @metroui/accordion
```

## Using
```typescript
import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.less"
import {Accordion, ACCORDION_MODE, Frame} from "../src/index.ts";

const App = () => {
    return (
        <>
            <Accordion mode={ACCORDION_MODE.MULTI_FRAME} duration={300}>
                <Frame open caption="Frame 1">
                    <div className="padding">
                        Frame 1 Content ...
                    </div>
                </Frame>
                <Frame caption="Frame 2">
                    <div className="padding">
                        Frame 2 Content ...
                    </div>
                </Frame>
                <Frame open caption="Frame 3">
                    <div className="padding">
                        Frame 3 Content ...
                    </div>
                </Frame>
            </Accordion>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );
```

### Accordion Mode
- [x] SINGLE_FRAME
- [x] MULTI_FRAME