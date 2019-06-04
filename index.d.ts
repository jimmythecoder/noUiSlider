export = noUiSlider;
export as namespace noUiSlider;

declare namespace noUiSlider {
    /**
     * To create a slider, call noUiSlider.create() with an element and your options.
     */
    function create(
        target: HTMLElement,
        options: Options
    ): noUiSlider.noUiSlider;

    interface Options {
        /**
         * The start option sets the number of handles and their start positions, relative to range.
         */
        start: string | string[] | number | number[];
        /**
         * All values on the slider are part of a range. The range has a minimum and maximum value.
         * The minimum value cannot be equal to the maximum value.
         */
        range: { [key: string]: number | number[] };
        /**
         * The connect setting can be used to control the (green) bar between the handles, or the edges of the slider.
         * Pass an array with a boolean for every connecting element, including the edges of the slider.
         * The length of this array must match the handle count + 1.
         * Setting true sets the bars between the handles, but not between the handles and the sliders edges.
         */
        connect?: boolean | boolean[];
        /**
         * When using two handles, the minimum distance between the handles can be set using the margin option.
         * The margin value is relative to the value set in 'range'.
         * This option is only available on standard linear sliders.
         */
        margin?: number;
        /**
         * The limit option is the opposite of the margin option,
         * limiting the maximum distance between two handles.
         * As with the margin option, the limit option can only be used on linear sliders.
         */
        limit?: number;
        /**
         * Padding limits how close to the slider edges handles can be.
         */
        padding?: number;
        /**
         * By default, the slider slides fluently.
         * In order to make the handles jump between intervals, you can use this option.
         * The step option is relative to the values provided to range.
         */
        step?: number;
        /**
         * The orientation setting can be used to set the slider to "vertical" or "horizontal".
         * Set dimensions! Vertical sliders don't assume a default height, so you'll need to set one.
         * You can use any unit you want, including % or px.
         */
        orientation?: "vertical" | "horizontal";
        /**
         * By default the sliders are top-to-bottom and left-to-right,
         * but you can change this using the direction option,
         * which decides where the upper side of the slider is.
         */
        direction?: "ltr" | "rtl";
        /**
         * noUiSlider can provide a basic tooltip without using its events system.
         * Set the tooltips option to true to enable.
         * This option can also accept formatting options to format the tooltips content.
         * In that case, pass an array with a formatter for each handle, true to use the default or false to display no tooltip.
         */
        tooltips?: boolean | Object | ((...args: any[]) => any);
        /**
         * Set the animate option to false to prevent the slider from animating to a new value with when calling .val().
         */
        animate?: boolean;
        /**
         * The animationDuration option can be used to set the animation speed assumed by the slider library.
         * In addition to this, you must manually set the CSS (-webkit-)transition property for the .noUi-state-tap .noUi-origin selector.
         */
        animationDuration?: number;
        /**
         * When a non-linear slider has been configured, the snap option can be set to true to force the slider to jump
         * between the specified values.
         */
        snap?: boolean;
        /**
         * All values on the slider are part of a range. The range has a minimum and maximum value.
         */
        behaviour?: string;
        /**
         * To format the slider output, noUiSlider offers a format option.
         * Simply specify to and from functions to encode and decode the values.
         * See manual formatting to the right for usage information.
         * By default, noUiSlider will format output with 2 decimals.
         */
        format?: Formatter | wNumb.Instance;
        /**
         * Allows you to generate points along the slider.
         */
        pips?: PipsOptions;

        /**
         * If your styling system doesn't match the convention in noUiSlider, you can use the cssPrefix and cssClasses options to reconfigure the markup.
         * Default "noUi-"
         */
        cssPrefix?: string;

        /**
         * Full list of classnames to override.
         * Does NOT extend the default classes.
         * Have a look at the source for the full, current list:
         * https://github.com/leongersen/noUiSlider/blob/master/src/nouislider.js#L880
         */
        cssClasses?: ClassList;
    }

    interface Formatter {
        /**
         * format to string
         */
        to(val: number): string;
        /**
         * get number from formatted string
         */
        from(val: string): number;
    }

    interface ClassList {
        target: string;
        base: string;
        origin: string;
        handle: string;
        handleLower: string;
        handleUpper: string;
        touchArea: string;
        horizontal: string;
        vertical: string;
        background: string;
        connect: string;
        connects: string;
        ltr: string;
        rtl: string;
        draggable: string;
        drag: string;
        tap: string;
        active: string;
        tooltip: string;
        pips: string;
        pipsHorizontal: string;
        pipsVertical: string;
        marker: string;
        markerHorizontal: string;
        markerVertical: string;
        markerNormal: string;
        markerLarge: string;
        markerSub: string;
        value: string;
        valueHorizontal: string;
        valueVertical: string;
        valueNormal: string;
        valueLarge: string;
        valueSub: string;
    }

    interface PipsOptions {
        /**
         * The 'range' mode uses the slider range to determine where the pips should be. A pip is generated for every percentage specified.
         *
         * The 'steps', like 'range', uses the slider range. In steps mode, a pip is generated for every step.
         * The 'filter' option can be used to filter the generated pips from the 'steps' options'
         * The filter function must return 0 (no value), 1 (large value) or 2 (small value).
         *
         * In 'positions' mode, pips are generated at percentage-based positions on the slider.
         * Optionally, the stepped option can be set to true to match the pips to the slider steps.
         *
         * The 'count' mode can be used to generate a fixed number of pips. As with positions mode, the stepped option can be used.
         *
         * The 'values' mode is similar to positions, but it accepts values instead of percentages. The stepped option can be used for this mode.
         *
         */
        mode: "range" | "steps" | "positions" | "count" | "values";
        /**
         * Range Mode: percentage for range mode
         * Step Mode: step number for steps
         * Positions Mode: percentage-based positions on the slider
         * Count Mode: positions between pips
         */
        density?: number;
        /**
         * Step Mode: The filter option can be used to filter the generated pips.
         * The filter function must return 0 (no value), 1 (large value) or 2 (small value).
         */
        filter?: (...args: any[]) => PipFilterResult;
        /**
         * format for step mode
         * see noUiSlider format
         */
        format?: Formatter | wNumb.Instance;
        /**
         *
         * values for positions and values mode
         * number pips for count mode
         */
        values?: number | number[];
        /**
         * stepped option for positions, values and count mode
         */
        stepped?: boolean;
    }

    const enum PipFilterResult {
        NoValue,
        LargeValue,
        SmallValue
    }

    interface Callback {
        /**
         * Array for both one-handle and two-handle sliders. It contains the current slider values,
         * with formatting applied.
         */
        (values: any[], handle: number, unencodedValues: number[]): void;
    }

    interface noUiSlider {
        /**
         * Bind event to the slider.
         */
        on(eventName: string, callback: Callback): void;
        /**
         * Unbind event to the slider.
         */
        off(eventName: string): void;
        /**
         * Destroy's the slider.
         */
        destroy(): void;
        /**
         * To get the current slider value. For one-handle sliders, calling .get() will return the value.
         * For two-handle sliders, an array[value, value] will be returned.
         */
        get(): string | string[];
        /**
         * noUiSlider will keep your values within the slider range, which saves you a bunch of validation.
         * If you have configured the slider to use one handle, you can change the current value by passing
         * a number to the .set() method. If you have two handles, pass an array. One-handled sliders
         * will also accept arrays. Within an array, you can set one position to null
         * if you want to leave a handle unchanged.
         */
        set(value: number | (number | null)[]): void;
        /**
         * To return to the initial slider values, you can use the .reset() method. This will only reset the slider values.
         */
        reset(): void;
        /**
         * Exposes the options used to create the noUiSlider instance
         */
        options: Options;
        /**
         * method that can change the 'margin',  'limit', 'step', 'range', 'animate' and  'snap' options.
         * All other options require changes to the slider's HTML or event bindings.
         */
        updateOptions(newOptions: Options, fireSetEvent?: boolean): void;
    }

    interface Instance extends HTMLElement {
        noUiSlider: noUiSlider;
    }
}

/**
 * wNumb 1.0 typings
 */
declare function wNumb(options?: wNumb.Options): wNumb.Instance;

declare namespace wNumb {
    interface Options {
        /** The number of decimals to include in the result. Limited to 7. */
        decimals?: number;
        /**
         * The decimal separator.
         * Defaults to '.' if thousand isn't already set to '.'.
         */
        mark?: string;
        /**
         * Separator for large numbers. For example: ' ' would result in a formatted number of 1 000 000.
         */
        thousand?: string;
        /**
         * A string to prepend to the number. Use cases include prefixing with money symbols such as '$' or '€'.
         */
        prefix?: string;
        /**
         * A number to append to a number. For example: ',-'.
         */
        postfix?: string;
        /**
         * The prefix for negative values. Defaults to '-' if negativeBefore isn't set.
         */
        negative?: string;
        /**
         * The prefix for a negative number. Inserted before prefix.
         */
        negativeBefore?: string;
        /**
         * This is a powerful option to manually modify the slider output.
         *
         * For example, to show a number in another currency:
         * function( value ){
         *  return value * 1.32;
         * }
         */
        encoder?: (value: number) => number;
        /**
         * Reverse the operations set in encoder.
         * Use this option to undo modifications made while encoding the value.
         * function( value ){
         *   return value / 1.32;
         * }
         */
        decoder?: (value: number) => number;
        /**
         * Similar to encoder, but applied after all other formatting options are applied.
         */
        edit?: (value: number) => number;
        /**
         * Similar to decoder and the reverse for edit.
         * Applied before all other formatting options are applied.
         */
        undo?: (value: number) => number;
    }

    interface Instance {
        /**
         * format to string
         */
        to(val: number): string;
        /**
         * get number from formatted string
         */
        from(val: string): number;
    }
}
