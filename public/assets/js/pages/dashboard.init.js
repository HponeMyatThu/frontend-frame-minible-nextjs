function getChartColorsArray(r) {
   if (null !== document.getElementById(r)) {
      var t = document.getElementById(r).getAttribute("data-colors");
      if (t)
         return (t = JSON.parse(t)).map(function (r) {
            var t = r.replace(" ", "");
            if (-1 === t.indexOf(",")) {
               var e = getComputedStyle(
                  document.documentElement
               ).getPropertyValue(t);
               return e || t;
            }
            var a = r.split(",");
            return 2 != a.length
               ? t
               : "rgba(" +
                    getComputedStyle(document.documentElement).getPropertyValue(
                       a[0]
                    ) +
                    "," +
                    a[1] +
                    ")";
         });
   }
}
var options1,
   chart1,
   BarchartTotalReveueColors = getChartColorsArray("total-revenue-chart");
BarchartTotalReveueColors &&
   ((options1 = {
      series: [{ data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54] }],
      fill: { colors: BarchartTotalReveueColors },
      chart: { type: "bar", width: 70, height: 40, sparkline: { enabled: !0 } },
      plotOptions: { bar: { columnWidth: "50%" } },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
         fixed: { enabled: !1 },
         x: { show: !1 },
         y: {
            title: {
               formatter: function (r) {
                  return "";
               },
            },
         },
         marker: { show: !1 },
      },
   }),
   (chart1 = new ApexCharts(
      document.querySelector("#total-revenue-chart"),
      options1
   )).render());
var RadialchartOrdersChartColors = getChartColorsArray("orders-chart");
RadialchartOrdersChartColors &&
   ((options = {
      fill: { colors: RadialchartOrdersChartColors },
      series: [70],
      chart: {
         type: "radialBar",
         width: 45,
         height: 45,
         sparkline: { enabled: !0 },
      },
      dataLabels: { enabled: !1 },
      plotOptions: {
         radialBar: {
            hollow: { margin: 0, size: "60%" },
            track: { margin: 0 },
            dataLabels: { show: !1 },
         },
      },
   }),
   (chart = new ApexCharts(
      document.querySelector("#orders-chart"),
      options
   )).render());
var RadialchartCustomersColors = getChartColorsArray("customers-chart");
RadialchartCustomersColors &&
   ((options = {
      fill: { colors: RadialchartCustomersColors },
      series: [55],
      chart: {
         type: "radialBar",
         width: 45,
         height: 45,
         sparkline: { enabled: !0 },
      },
      dataLabels: { enabled: !1 },
      plotOptions: {
         radialBar: {
            hollow: { margin: 0, size: "60%" },
            track: { margin: 0 },
            dataLabels: { show: !1 },
         },
      },
   }),
   (chart = new ApexCharts(
      document.querySelector("#customers-chart"),
      options
   )).render());
var options2,
   chart2,
   BarchartGrowthColors = getChartColorsArray("growth-chart");
BarchartGrowthColors &&
   ((options2 = {
      series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
      fill: { colors: BarchartGrowthColors },
      chart: { type: "bar", width: 70, height: 40, sparkline: { enabled: !0 } },
      plotOptions: { bar: { columnWidth: "50%" } },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
         fixed: { enabled: !1 },
         x: { show: !1 },
         y: {
            title: {
               formatter: function (r) {
                  return "";
               },
            },
         },
         marker: { show: !1 },
      },
   }),
   (chart2 = new ApexCharts(
      document.querySelector("#growth-chart"),
      options2
   )).render());
var options,
   chart,
   LinechartsalesColors = getChartColorsArray("sales-analytics-chart");
LinechartsalesColors &&
   ((options = {
      chart: { height: 343, type: "line", stacked: !1, toolbar: { show: !1 } },
      stroke: { width: [0, 2, 4], curve: "smooth" },
      plotOptions: { bar: { columnWidth: "30%" } },
      colors: LinechartsalesColors,
      series: [
         {
            name: "Desktops",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
         },
         {
            name: "Laptops",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
         },
         {
            name: "Tablets",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
         },
      ],
      fill: {
         opacity: [0.85, 0.25, 1],
         gradient: {
            inverseColors: !1,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
         },
      },
      labels: [
         "01/01/2003",
         "02/01/2003",
         "03/01/2003",
         "04/01/2003",
         "05/01/2003",
         "06/01/2003",
         "07/01/2003",
         "08/01/2003",
         "09/01/2003",
         "10/01/2003",
         "11/01/2003",
      ],
      markers: { size: 0 },
      xaxis: { type: "datetime" },
      yaxis: { title: { text: "Points" } },
      tooltip: {
         shared: !0,
         intersect: !1,
         y: {
            formatter: function (r) {
               return void 0 !== r ? r.toFixed(0) + " points" : r;
            },
         },
      },
      grid: { borderColor: "#f1f1f1" },
   }),
   (chart = new ApexCharts(
      document.querySelector("#sales-analytics-chart"),
      options
   )).render());
