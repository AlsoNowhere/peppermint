import thyme from "../../lib/thyme";

import { PHeader } from "../components/structure/header/PHeader.component";
import { PFooter } from "../components/structure/footer/PFooter.component";
import { PAside } from "../components/structure/aside/PAside.component";

export const peppermintModule = dill.module("peppermint",[thyme]);

peppermintModule.setComponent(PHeader);
peppermintModule.setComponent(PFooter);
peppermintModule.setComponent(PAside);
