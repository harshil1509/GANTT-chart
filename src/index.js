import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

import {
  GanttComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Edit,
  Selection
} from "@syncfusion/ej2-react-gantt";
import * as React from "react";

import "./App.css";
const GanttData = [
  {
    TaskID: 1,
    TaskName: "Planning",
    StartDate: new Date("04/01/2021"),
    EndDate: new Date("04/05/2021"),
    Status: "Finished"
  },
  {
    TaskID: 2,
    TaskName: "Preparation",
    StartDate: new Date("04/05/2021"),
    EndDate: new Date("04/06/2021"),
    Status: "In Progress"
  },
  {
    TaskID: 3,
    TaskName: "Procurement",
    StartDate: new Date("04/06/2021"),
    EndDate: new Date("04/10/2021"),
    Status: "Yet to start"
  }
];
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.taskFields = {
      id: "TaskID",
      name: "TaskName",
      startDate: "StartDate",
      endDate: "EndDate",
      status: "Status"
    };
    this.editSettings = {
      allowEditing: true,
      mode: "Auto"
    };
  }
  render() {
    return (
      <div>
      <h1 style={{textAlign: "center"}}>A GANTT chart implemented in React</h1>
      <h3>Double Click on any bar to modify its data</h3>
      <GanttComponent
        dataSource={GanttData}
        height="450px"
        
        taskFields={this.taskFields}
        allowSelection={true}
        editSettings={this.editSettings}
       
        splitterSettings={{position: "50%"}}
      >
      
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="50" textAlign="Left"/>
          <ColumnDirective field="TaskName" headerText="Task"  />
          <ColumnDirective field="StartDate" format="dd-MMM-yy" />
          <ColumnDirective field="EndDate" format="dd-MMM-yy" />
          <ColumnDirective field="Status" textAlign="Right" />
        </ColumnsDirective>
       
        <Inject services={[Edit, Selection]} />
      </GanttComponent>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
