(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[990],{9013:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var n=l(7294),r=l(316),a=l(7821);function c(e){return[{title:"Default Props Table",jsx:n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,e("Prop")),n.createElement("th",null,e("Type")),n.createElement("th",null,e("Descriptions")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"position"),n.createElement("td",null,"String"),n.createElement("td",null,"current position of the plugin")),n.createElement("tr",null,n.createElement("td",null,"nodes"),n.createElement("td",null,"Object"),n.createElement("td",null,"to determine if there is another plugin around the current plugin")),n.createElement("tr",null,n.createElement("td",null,"Calendar"),n.createElement("td",null,"HTML Div Element"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"DatePicker"),n.createElement("td",null,"HTML Div Element"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"calendarProps"),n.createElement("td",null,"Object"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"datePickerProps"),n.createElement("td",null,"Object"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"state"),n.createElement("td",null,"Object"),n.createElement("td",null,"the state of the calendar")),n.createElement("tr",null,n.createElement("td",null,"setState"),n.createElement("td",null,"Function"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"registerListener"),n.createElement("td",null,"Function"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"handleChange"),n.createElement("td",null,"Function"),n.createElement("td",null,"if you want to trigger a change event")),n.createElement("tr",null,n.createElement("td",null,"handlePropsChange"),n.createElement("td",null,"Function"),n.createElement("td",null,"if you want to trigger a props change event")),n.createElement("tr",null,n.createElement("td",null,"handleFocusedDate"),n.createElement("td",null,"Function"),n.createElement("td",null,"if you want to trigger a focus change event"))))},{title:"Calendar & DatePicker",description:"calendar_datepicker_props",code:'import React from "react";\nimport DatePicker from "react-multi-date-picker";\n\nfunction MyPlugin({ DatePicker }) {\n  return (\n    <div>\n      <button\n        style={{ margin: "5px" }}\n        disabled={!DatePicker}\n        onClick={() => DatePicker.closeCalendar()}\n      >\n        Close\n      </button>\n    </div>\n  );\n}\n\nexport default function Example() {\n  return (\n    <DatePicker \n      plugins={[\n        <MyPlugin position="bottom" />\n      ]} \n    />\n  )\n}',jsx:n.createElement(a.ZP,{plugins:[n.createElement(u,{position:"bottom"})]})},{title:"calendarProps & datePickerProps",description:"calendar_props_datepicker_props",code:"function MyPlugin({ datePickerProps, calendarProps }) {\n  const props = datePickerProps || calendarProps\n\n  ...\n}"},{title:"State Prop",description:"state_prop",jsx:n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,e("Property")),n.createElement("th",null,e("Type")),n.createElement("th",null,e("Descriptions")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"date"),n.createElement("td",null,"DateObject"),n.createElement("td",null,n.createElement("p",null,"The date displayed by the calendar"))),n.createElement("tr",null,n.createElement("td",null,"selectedDate"),n.createElement("td",null,"DateObject or DateObject[]"),n.createElement("td",null,n.createElement("p",null,"user-selected date(s)"))),n.createElement("tr",null,n.createElement("td",null,"multiple"),n.createElement("td",null,"Boolean"),n.createElement("td",{rowSpan:"2"},n.createElement("p",null," Specifies whether it is in multiple or range mode."),n.createElement("p",null,"If you want to change the value of any of these properties to true, you must change the value of the selectedDate from DateObject to DateObject[]."))),n.createElement("tr",null,n.createElement("td",null,"range"),n.createElement("td",null,"Boolean")),n.createElement("tr",null,n.createElement("td",null,"onlyMonthPicker"),n.createElement("td",null,"Boolean"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"onlyYearPicker"),n.createElement("td",null,"Boolean"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"initialValue"),n.createElement("td",null,"-"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"value"),n.createElement("td",null,"-"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"focused"),n.createElement("td",null,"DateObject or undefined"),n.createElement("td",null,n.createElement("p",null,"the date that is focused by the user"))),n.createElement("tr",null,n.createElement("td",null,"calendar"),n.createElement("td",null,"String"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"locale"),n.createElement("td",null,"String"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"format"),n.createElement("td",null,"String"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"year"),n.createElement("td",null,"Number"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"today"),n.createElement("td",null,"DateObject"),n.createElement("td",null,n.createElement("p",null,"changing this value interferes with calendar performance")))))}]}function u(e){var t=e.DatePicker;return n.createElement("div",null,n.createElement("button",{style:{margin:"5px"},disabled:!t,onClick:function(){return t.closeCalendar()}},"Close"))}function m(e){var t=e.pageContext.language||"en";return n.createElement(r.Z,{language:t,doc:c,section:"plugins/docs"})}}}]);
//# sourceMappingURL=component---src-pages-plugins-docs-default-props-js-e20cac815f59cb041c3f.js.map