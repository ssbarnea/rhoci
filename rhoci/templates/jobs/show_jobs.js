function show_jobs(dfg_name, result, release, failure_name) { 

  {% include "jobs/show_jobs_datatable.js" -%}
  $("#jobs_modal").modal({show:true, backdrop: false});

}
