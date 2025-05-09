!(function (c) {
   "use strict";
   function e() {}
   (e.prototype.init = function () {
      c(".select2").select2(),
         c(".select2-limiting").select2({ maximumSelectionLength: 2 }),
         c(".select2-search-disable").select2({
            minimumResultsForSearch: 1 / 0,
         }),
         c("#colorpicker-default").spectrum(),
         c("#colorpicker-showalpha").spectrum({ showAlpha: !0 }),
         c("#colorpicker-showpaletteonly").spectrum({
            showPaletteOnly: !0,
            showPalette: !0,
            color: "#34c38f",
            palette: [
               ["#556ee6", "white", "#34c38f", "rgb(255, 128, 0);", "#50a5f1"],
               ["red", "yellow", "green", "blue", "violet"],
            ],
         }),
         c("#colorpicker-togglepaletteonly").spectrum({
            showPaletteOnly: !0,
            togglePaletteOnly: !0,
            togglePaletteMoreText: "more",
            togglePaletteLessText: "less",
            color: "#556ee6",
            palette: [
               [
                  "#000",
                  "#444",
                  "#666",
                  "#999",
                  "#ccc",
                  "#eee",
                  "#f3f3f3",
                  "#fff",
               ],
               ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
               [
                  "#f4cccc",
                  "#fce5cd",
                  "#fff2cc",
                  "#d9ead3",
                  "#d0e0e3",
                  "#cfe2f3",
                  "#d9d2e9",
                  "#ead1dc",
               ],
               [
                  "#ea9999",
                  "#f9cb9c",
                  "#ffe599",
                  "#b6d7a8",
                  "#a2c4c9",
                  "#9fc5e8",
                  "#b4a7d6",
                  "#d5a6bd",
               ],
               [
                  "#e06666",
                  "#f6b26b",
                  "#ffd966",
                  "#93c47d",
                  "#76a5af",
                  "#6fa8dc",
                  "#8e7cc3",
                  "#c27ba0",
               ],
               [
                  "#c00",
                  "#e69138",
                  "#f1c232",
                  "#6aa84f",
                  "#45818e",
                  "#3d85c6",
                  "#674ea7",
                  "#a64d79",
               ],
               [
                  "#900",
                  "#b45f06",
                  "#bf9000",
                  "#38761d",
                  "#134f5c",
                  "#0b5394",
                  "#351c75",
                  "#741b47",
               ],
               [
                  "#600",
                  "#783f04",
                  "#7f6000",
                  "#274e13",
                  "#0c343d",
                  "#073763",
                  "#20124d",
                  "#4c1130",
               ],
            ],
         }),
         c("#colorpicker-showintial").spectrum({ showInitial: !0 }),
         c("#colorpicker-showinput-intial").spectrum({
            showInitial: !0,
            showInput: !0,
         });
      var n = {};
      c('[data-toggle="touchspin"]').each(function (e, a) {
         var t = c.extend({}, n, c(a).data());
         c(a).TouchSpin(t);
      }),
         c("input[name='demo3_21']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary",
         }),
         c("input[name='demo3_22']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary",
         }),
         c("input[name='demo_vertical']").TouchSpin({ verticalbuttons: !0 }),
         c("input#defaultconfig").maxlength({
            warningClass: "badge bg-info",
            limitReachedClass: "badge bg-warning",
         }),
         c("input#thresholdconfig").maxlength({
            threshold: 20,
            warningClass: "badge bg-info",
            limitReachedClass: "badge bg-warning",
         }),
         c("input#moreoptions").maxlength({
            alwaysShow: !0,
            warningClass: "badge bg-success",
            limitReachedClass: "badge bg-danger",
         }),
         c("input#alloptions").maxlength({
            alwaysShow: !0,
            warningClass: "badge bg-success",
            limitReachedClass: "badge bg-danger",
            separator: " out of ",
            preText: "You typed ",
            postText: " chars available.",
            validate: !0,
         }),
         c("textarea#textarea").maxlength({
            alwaysShow: !0,
            warningClass: "badge bg-info",
            limitReachedClass: "badge bg-warning",
         }),
         c("input#placement").maxlength({
            alwaysShow: !0,
            placement: "top-left",
            warningClass: "badge bg-info",
            limitReachedClass: "badge bg-warning",
         });
   }),
      (c.AdvancedForm = new e()),
      (c.AdvancedForm.Constructor = e);
})(window.jQuery),
   (function () {
      "use strict";
      window.jQuery.AdvancedForm.init();
   })(),
   $(function () {
      "use strict";
      var o = $(".docs-date"),
         l = $(".docs-datepicker-container"),
         r = $(".docs-datepicker-trigger"),
         d = {
            show: function (e) {
               console.log(e.type, e.namespace);
            },
            hide: function (e) {
               console.log(e.type, e.namespace);
            },
            pick: function (e) {
               console.log(e.type, e.namespace, e.view);
            },
         };
      o
         .on({
            "show.datepicker": function (e) {
               console.log(e.type, e.namespace);
            },
            "hide.datepicker": function (e) {
               console.log(e.type, e.namespace);
            },
            "pick.datepicker": function (e) {
               console.log(e.type, e.namespace, e.view);
            },
         })
         .datepicker(d),
         $(".docs-options, .docs-toggles").on("change", function (e) {
            var a,
               t = e.target,
               n = $(t),
               c = n.attr("name"),
               i = "checkbox" === t.type ? t.checked : n.val();
            switch (c) {
               case "container":
                  i ? (i = l).show() : l.hide();
                  break;
               case "trigger":
                  i ? (i = r).prop("disabled", !1) : r.prop("disabled", !0);
                  break;
               case "inline":
                  (a = $('input[name="container"]')).prop("checked") ||
                     a.click();
                  break;
               case "language":
                  $('input[name="format"]').val(
                     $.fn.datepicker.languages[i].format
                  );
            }
            (d[c] = i),
               o.datepicker("reset").datepicker("destroy").datepicker(d);
         }),
         $(".docs-actions").on("click", "button", function (e) {
            var a,
               t = $(this).data(),
               n = t.arguments || [];
            e.stopPropagation(),
               t.method &&
                  (t.source
                     ? o.datepicker(t.method, $(t.source).val())
                     : (a = o.datepicker(t.method, n[0], n[1], n[2])) &&
                       t.target &&
                       $(t.target).val(a));
         });
   }),
   flatpickr("#datepicker-basic", { defaultDate: new Date() }),
   flatpickr("#datepicker-datetime", {
      enableTime: !0,
      dateFormat: "m-d-Y H:i",
      defaultDate: new Date(),
   }),
   flatpickr("#datepicker-humanfd", {
      altInput: !0,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      defaultDate: new Date(),
   }),
   flatpickr("#datepicker-minmax", {
      minDate: "today",
      defaultDate: new Date(),
      maxDate: new Date().fp_incr(14),
   }),
   flatpickr("#datepicker-disable", {
      onReady: function () {
         this.jumpToDate("2025-01");
      },
      disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9)],
      dateFormat: "Y-m-d",
      defaultDate: new Date(),
   }),
   flatpickr("#datepicker-multiple", {
      mode: "multiple",
      dateFormat: "Y-m-d",
      defaultDate: new Date(),
   }),
   flatpickr("#datepicker-range", { mode: "range", defaultDate: new Date() }),
   flatpickr("#datepicker-timepicker", {
      enableTime: !0,
      noCalendar: !0,
      dateFormat: "H:i",
      defaultDate: new Date(),
   }),
   flatpickr("#datepicker-inline", { inline: !0, defaultDate: new Date() });
