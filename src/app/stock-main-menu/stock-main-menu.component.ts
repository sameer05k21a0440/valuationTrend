import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';

import { StockListProvider } from  '../../provider/stock-provider';

import * as echarts from 'echarts'; //引入图表插件

import { NzModalService} from 'ng-zorro-antd';
 
@Component({
  selector: 'app-stock-main-menu',
  templateUrl: './stock-main-menu.component.html',
  styleUrls: ['./stock-main-menu.component.css']
})
export class StockMainMenuComponent implements OnInit {
 allChecked = false;
 indeterminate = true; 
  stockListInfo:any[];
  isStockAvgVisible=false;
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false }
  ];
  constructor(public stockListProvider:StockListProvider,private modalService: NzModalService) {
    this.stockListInfo=this.stockListProvider.stockListData;
  }

  ngOnInit() {
    setTimeout(()=> {
      this.getStockChart();
    },1000);

}

public getStockChart(){
    let myChart = echarts.init (document.getElementById("stock-chart") as HTMLDivElement) ;
      myChart.setOption({
            title : {
             text: 'Stock Chart',
             subtext: '万元',
             x:'left',
             y:'top',
              textStyle:{
                 fontSize: 14,
                 fontWeight: 600,
                 
              },
         },
            tooltip : {
             trigger: 'axis',
               axisPointer: {
                 type: 'cross'
             }
         },
         legend: {
             orient: 'horizontal',  
             borderWidth: 0,            // 图例边框线宽，单位px，默认为0（无边框）
             padding: 5,                // 图例内边距，单位px，默认各方向内边距为5， 
             itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
             itemWidth: 20,             // 图例图形宽度
             itemHeight: 14,            // 图例图形高度
             data: ['N',  'P', 'T', 'R']
         },
         toolbox: {
             show : true,
             feature : {
                 mark : {show: true},
                 dataView : {show: true, readOnly: false},
                 magicType : {show: true, type: ['line', 'bar']},
                 restore : {show: true},
                 saveAsImage : {show: true}
             }
         },
         calculable : true,
         grid: {
         left: '8%',
         right: '15%',
         bottom: '20%',
         },
         xAxis: {
              type: 'category',
              data: ['2018-08-26', '2018-08-25','2018-08-20', '2018-08-15', '2018-08-10', '2018-07-01', '2018-06-25','2018-06-15','2018-05-25','2017-12-25'],
              scale: true,
              boundaryGap : true,
              axisLine: {onZero: false},
              splitLine: {show: true},
              splitNumber: 10,
         },
         yAxis: {
             type: 'value',
               scale: true,
                splitArea: {
                 show: true
             },
        axisLabel:{formatter:'{value} 万元'}
         },
          dataZoom: [
             {
                 type: 'inside',
                 start: 0,
                 end: 100
             },
             {
                 show: true,
                 type: 'slider',
                 y: '90%',
                 start: 0,
                 end: 100
             }
         ],
         series: [{
              name: "N" ,
             type: 'line',
             symbol:["circle"],
             symbolSize:10,
             precision:2,
              silent: false, // 取消点击事件
               smooth:true,
               lineStyle:{ 
                   normal:{
                   type:"solid",  
                   width:10,
                   opacity:1, 
                   }
               },
                itemStyle:{ // 转折点 控制
                  normal:{  
                    color:'#808080'
                  }
             },
            data: [['2018-08-25', 20],['2018-08-25',50]] 
         },{
              name: "N" ,
             type: 'line',
             symbol:['circle'],
             symbolSize:10,
              precision:2,
              //width:5,
             // color: ['#31b573'],// 颜色
             // color: ['#fff'],// 颜色
               silent: false, // 取消点击事件
               smooth:true,
               lineStyle:{ 
                  normal:{
                       type:"solid",  
                       width:10,
                       opacity:1
                  }
               },
               itemStyle:{ // 转折点 控制
               normal:{
                   color:"#808080",                 //颜色
                   borderColor:"#808080",         //边框颜色
                   borderWidth:2,               //柱条的描边宽度，默认不描边。
                    opacity:1,
                    shadowBlur:20,               //图形阴影的模糊大小。
                    shadowColor:"#000",         //阴影颜色
                    shadowOffsetX:0,             //阴影水平方向上的偏移距离。
                    shadowOffsetY:0,             //阴影垂直方向上的偏移距离。
               }
               },
               
             data:[['2018-08-25',25]]
         }
         ,{
             name: "P" ,
             type:'line',
              symbol:['circle'],
              symbolSize:10,
              precision:2,
             // color:['red'],// 颜色
               silent: false, // 取消点击事件
               smooth:true,
                lineStyle:{ 
                   normal:{
                   type:"solid",  
                   width:10,
                   opacity:1, 
                   }
               },
               itemStyle:{ // 转折点 控制
               normal:{
                 color:'#ff6d0b'
                    //opacity:0
               }
               },
              data:[['2018-08-20',30],['2018-08-20',90]],
             
         },{
              name: "P" ,
             type:'line',
              symbol:['circle'],
              symbolSize:10,
              precision:2,
              // color: ['#fff'],// 颜色
               silent: false, // 取消点击事件
               smooth:true,
                 lineStyle:{ 
                  normal:{
                       type:"solid",  
                       width:10,
                       opacity:1,
                  }
               },
               itemStyle:{ // 转折点 控制
               normal:{
                    color:'#ff6d0b',
                    borderColor:"#ff6d0b",
                    borderWidth:2,               //柱条的描边宽度，默认不描边。
                    opacity:1,
                    shadowBlur:20,               //图形阴影的模糊大小。
                    shadowColor:"#000",         //阴影颜色
                    shadowOffsetX:0,             //阴影水平方向上的偏移距离。
                    shadowOffsetY:0,

               }
               },
               
             data:[['2018-08-20',60]]
             
         }
         
         ,{
             name: "T" ,
             type:'line',
             symbol:['circle'],
              symbolSize:10,
              precision:2,
              //color: ['#78c614'],// 颜色
               silent: false, // 取消点击事件
               smooth:true,
                lineStyle:{ 
                   normal:{
                   type:"solid",  
                   width:10,
                   opacity:1, 
                   }
               },
               itemStyle:{ // 转折点 控制
                normal:{  
                  color:'#7e4ead'
                }
               },
            data: [['2018-08-10', 40],['2018-08-10',60]],
         },{
             name: "T" ,
             type:'line',
             symbol:['circle'],
              symbolSize:10,
              precision:2,
              //color: ['#fff'],// 颜色
               silent: false, // 取消点击事件
               smooth:true,
               lineStyle:{ 
                  normal:{
                       type:"solid",  
                       width:10,
                       opacity:1,
                  }
               },
               itemStyle:{ // 转折点 控制
                normal:{
                  color:"#7e4ead",                 //颜色
                   borderColor:"#7e4ead",         //边框颜色
                   borderWidth:2,               //柱条的描边宽度，默认不描边。
                    opacity:1,
                    shadowBlur:20,               //图形阴影的模糊大小。
                    shadowColor:"#000",         //阴影颜色
                    shadowOffsetX:0,             //阴影水平方向上的偏移距离。
                    shadowOffsetY:0,             //阴影垂直方向上的偏移距离。
                }
               },
             data: [['2018-08-10', 50]],
           
         },{
          name: "R" ,
          type: 'line',
          symbol:["circle"],
          symbolSize:10,
          precision:2,
           silent: false, // 取消点击事件
            smooth:true,
            lineStyle:{ 
                normal:{
                type:"solid",  
                width:10,
                opacity:1, 
                }
            },
             itemStyle:{ // 转折点 控制
               normal:{  
                 color:'#e3f988'
               }
          },
         data: [['2018-06-25', 40],['2018-06-25',80]] 
         },{
          name: "N" ,
          type: 'line',
          symbol:['circle'],
          symbolSize:10,
           precision:2,
           width:5,
          // color: ['#31b573'],// 颜色
          // color: ['#fff'],// 颜色
            silent: false, // 取消点击事件
            smooth:true,
            lineStyle:{ 
               normal:{
                    type:"solid",  
                    width:10,
                    opacity:1
               }
            },
            itemStyle:{ // 转折点 控制
            normal:{
                color:"#e3f988",                 //颜色
                borderColor:"#e3f988",         //边框颜色
                borderWidth:2,               //柱条的描边宽度，默认不描边。
                 opacity:1,
                 shadowBlur:20,               //图形阴影的模糊大小。
                 shadowColor:"#000",         //阴影颜色
                 shadowOffsetX:0,             //阴影水平方向上的偏移距离。
                 shadowOffsetY:0,             //阴影垂直方向上的偏移距离。
            }},
            data: [['2018-06-25', 60]] 

         },
         {
          name: "N" ,
         type: 'line',
         symbol:["circle"],
         symbolSize:10,
         precision:2,
          silent: false, // 取消点击事件
           smooth:true,
           lineStyle:{ 
               normal:{
               type:"solid",  
               width:10,
               opacity:1, 
               }
           },
            itemStyle:{ // 转折点 控制
              normal:{  
                color:'#808080'
              }
         },
        data: [['2018-05-25', 20],['2018-05-25',50]] 
     },{
          name: "N" ,
         type: 'line',
         symbol:['circle'],
         symbolSize:10,
          precision:2,
          width:5,
         // color: ['#31b573'],// 颜色
         // color: ['#fff'],// 颜色
           silent: false, // 取消点击事件
           smooth:true,
           lineStyle:{ 
              normal:{
                   type:"solid",  
                   width:10,
                   opacity:1
              }
           },
           itemStyle:{ // 转折点 控制
           normal:{
               color:"#808080",                 //颜色
               borderColor:"#808080",         //边框颜色
               borderWidth:2,               //柱条的描边宽度，默认不描边。
                opacity:1,
                shadowBlur:20,               //图形阴影的模糊大小。
                shadowColor:"#000",         //阴影颜色
                shadowOffsetX:0,             //阴影水平方向上的偏移距离。
                shadowOffsetY:0,             //阴影垂直方向上的偏移距离。
           }
           },
           
         data:[['2018-05-25',25]]
     }]    
    });
}

updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne.forEach(item => item.checked = true);
    } else {
      this.checkOptionsOne.forEach(item => item.checked = false);
    }
  }
  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => item.checked === false)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  //Stock Average Modal
   showAvgStockModal(): void{
   this.isStockAvgVisible = true;
    let myChart = echarts.init (document.getElementById("stock-avg-chart") as HTMLDivElement) ;
    myChart.setOption({
      title : {
        text: 'Stock Avg Chart',
       // subtext: '万元',
        x:'left',
        y:'top',
         textStyle:{
            fontSize: 14,
            fontWeight: 600,
            
         },
    },
    tooltip : {
    trigger: 'axis',
      axisPointer: {
        type: 'cross'
    }
    },
    legend: {
      data: ['Stock Average Chart']
     },
     toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : true,
  grid: {
  left: '8%',
  right: '15%',
  bottom: '20%'
  },
      xAxis: {
        type: 'category',
        splitNumber:10,
        boundaryGap: false,
        scale: true,
        axisLine: {onZero: false},
        splitLine: {show: true},
        data: ['2018-08-25', '2018-08-26','2018-08-20', '2018-08-15', '2018-08-10', '2018-07-01', '2018-06-25'],
    },
    yAxis: {
        type: 'value',
        scale:true,
        splitArea: {
          show: true
      },
    },
    dataZoom: [
      {
          type: 'inside',
          start: 0,
          end: 100
      },
      {
          show: true,
          type: 'slider',
          y: '90%',
          start: 0,
          end: 100
      }
  ],
    series: [{
        type: 'line',
        smooth: true,
        name:'Stock Average Chart',
        data: [25, 60, 50, 60, 25, 1330, 1320],
        markPoint : {
          data : [
              {type : 'max', name: '最大值'},
              {type : 'min', name: '最小值'}
          ]
      },
      markLine : {
        data : [
          {type : 'average', name: '平均值'}
      ]
      }
        
    }]
    });
 

  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isStockAvgVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isStockAvgVisible = false;
  }
  
}
