import * as vega from "vega";
declare module '~/vegaspec/*.json' {
    const data: vega.Spec;

    export default data;
}