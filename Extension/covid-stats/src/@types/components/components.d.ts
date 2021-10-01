declare module CovidComponents {
    export interface Text {
        text: string | number;
        textClass: string;
        allowSpan: boolean;
        spanClass?: string;
    }
}
