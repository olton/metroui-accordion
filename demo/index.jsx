import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.less"
import {Accordion, ACCORDION_MODE, Frame} from "../src/index.ts";

const App = () => {
    return (
        <>
            <Accordion mode={ACCORDION_MODE.SINGLE_FRAME}>
                <Frame open caption="Frame 1">
                    <div className="padding">
                        Frame 1 Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores, dolores exercitationem quidem tempore vel. Accusamus alias aperiam autem cumque omnis perspiciatis placeat porro quidem sequi ut. Ea, totam!
                    </div>
                </Frame>
                <Frame caption="Frame 2">
                    <div className="padding">
                        Frame 2 Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illum incidunt nam pariatur praesentium quae quas quis. Alias architecto error exercitationem maxime mollitia nisi nostrum similique voluptatem. Asperiores id, voluptatem!
                    </div>
                </Frame>
                <Frame open caption="Frame 3">
                    <div className="padding">
                        Frame 3 Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt excepturi impedit itaque officia, pariatur quaerat qui repudiandae soluta voluptatum. Accusantium consequatur eaque eligendi iusto nobis. Aperiam doloribus vero voluptatem?
                    </div>
                </Frame>
            </Accordion>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );
