$(document).ready(function(){var t="";$("h2").each(function(){$(this).attr("id")&&$(this).attr("id").match(/year/g)&&(t+='<li><a href="#'+$(this).attr("id")+'">'+$(this).clone().children().remove().end().text()+"</a></li>")}),$(".dropdown-menu.years").html(t);var a={},e=9999,l=0;$("#total-num-pubs").text("Total number of publications: "+$("li pre.abstract").length),$("#total-num-pubs").addClass("alert alert-info"),$("li pre.abstract").each(function(){var t=$(this).text().toString(),r=t.match(/year = .*/g).join(""),i=parseInt(r.match(/[0-9]+/g).join(""));e>i&&(e=i),i>l&&(l=i),i in a?a[i]=a[i]+1:a[i]=1});for(var r=[],i=[],s={},o=e;l>=o;++o)r.push(o),o in a?(i.push(a[o]),s[o]=a[o]):(i.push(0),s[o]=0);$("ol").each(function(){var t=$(this).children("li").length;$(this).prev("h2").children(".count-stat").addClass("badge").text(t)}),Chart.defaults.global.responsive=!0;var n=$("#pint-pubs-chart").get(0).getContext("2d"),d={labels:r,datasets:[{label:"Number Publications per Year",data:i}]},c={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!1,barShowStroke:!1,barStrokeWidth:0,barValueSpacing:1,barDatasetSpacing:0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};Chart.defaults.global.responsive=!1,Chart.defaults.global.maintainAspectRatio=!1,Chart.defaults.global.tooltipXOffset=0,Chart.defaults.global.tooltipYOffset=0;new Chart(n).Bar(d,c);$("#stats-buttons").append('<div class="btn-group btn-group-xs" role="group"><button class="btn btn-xs btn-default" data-toggle="collapse" data-target="#chart-raw-data" aria-expanded="false" aria-controls="#chart-raw-data">JSON data of plot</button></div>'),$("#chart-raw-data").html("<pre>"+JSON.stringify(s,null,2)+"</pre>"),$("#image-download-docu").text("To download the plot and use it in your publications, right-click it. It is licensed under a Creative Commons Attribution 3.0 license."),$(".year-btn-group").removeClass("hidden")});