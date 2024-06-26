<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="row">
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
          <h3 class="font-weight-bold">Bem vindo ao Elementista</h3>
          <h6 class="font-weight-normal mb-0">Nossa missão é insprar a<span class="text-primary">próxima geração</span>
          </h6>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card position-relative">
        <div class="card-body">
          <div id="detailedReports" class="carousel slide detailed-report-carousel position-static pt-2"
            data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                    <div class="ml-xl-4 mt-3">
                      <p class="card-title">Noticias</p>
                      <h1 class="text-primary"></h1>
                      <h3 class="font-weight-500 mb-xl-4 text-primary"></h3>
                      <p class="mb-2 mb-xl-0"></p>
                    </div>
                  </div>
                  <div class="col-md-12 col-xl-9">
                    <div class="row">
                      <div class="col-md-6 border-right">
                        <div class="table-responsive mb-3 mb-md-0 mt-3">

                        </div>
                      </div>
                      <div class="col-md-6 mt-3">
                        <canvas id="north-america-chart"></canvas>
                        <div id="north-america-legend"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                    <div class="ml-xl-4 mt-3">
                      <p class="card-title">Feed</p>
                      <h1 class="text-primary"></h1>
                      <h3 class="font-weight-500 mb-xl-4 text-primary"></h3>
                      <p class="mb-2 mb-xl-0"></p>
                    </div>
                  </div>
                  <div class="col-md-12 col-xl-9">
                    <div class="row">
                      <div class="col-md-6 border-right">
                        <div class="table-responsive mb-3 mb-md-0 mt-3">

                        </div>
                      </div>
                      <div class="col-md-6 mt-3">
                        <canvas id="south-america-chart"></canvas>
                        <div id="south-america-legend"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#detailedReports" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#detailedReports" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card position-relative">
        <div class="card-body">
          <div id="detailedReports2" class="carousel slide detailed-report-carousel position-static pt-2"
            data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">                
                <p class="col-md-1 card-title">Post</p>
                <div class="row">                                  
                  <div class="col-md-12 col-xl-9">                  
                    <div class="row">
                      <div class="col-md-6 border-right">
                        <div class="card">
                          <div class="card-body">
                            <p class="card-title">Order Details</p>
                            <p class="font-weight-500">The total number of sessions within the date range. It is the
                              period time a user is actively engaged with your website, page or app, etc</p>
                          </div>
                        </div>
                     </div>
                      <div class="col-md-6 mt-1">
                        <div class="card">
                          <div class="card-body">
                            <p class="card-title">Order Details</p>
                            <p class="font-weight-500">The total number of sessions within the date range. It is the
                              period time a user is actively engaged with your website, page or app, etc</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">                        
                <p class="col-md-1 card-title">Post</p>
                <div class="row">
                  <div class="row">                                  
                  <div class="col-md-12 col-xl-9">                  
                    <div class="row">
                      <div class="col-md-6 border-right">
                        <div class="card">
                          <div class="card-body">
                            <p class="card-title">Order Details</p>
                            <p class="font-weight-500">The total number of sessions within the date range. It is the
                              period time a user is actively engaged with your website, page or app, etc</p>
                          </div>
                        </div>
                     </div>
                      <div class="col-md-6 mt-1">
                        <div class="card">
                          <div class="card-body">
                            <p class="card-title">Order Details</p>
                            <p class="font-weight-500">The total number of sessions within the date range. It is the
                              period time a user is actively engaged with your website, page or app, etc</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#detailedReports2" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#detailedReports2" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="row">
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Order Details</p>
          <p class="font-weight-500">The total number of sessions within the date range. It is the period time a user is
            actively engaged with your website, page or app, etc</p>

        </div>
      </div>
    </div>
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p class="card-title">Sales Report</p>
            <a href="#" class="text-info">View all</a>
          </div>
          <p class="font-weight-500">The total number of sessions within the date range. It is the period time a user is
            actively engaged with your website, page or app, etc</p>
          <div id="sales-legend" class="chartjs-legend mt-4 mb-2"></div>

        </div>
      </div>
    </div>
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p class="card-title">Sales Report</p>
            <a href="#" class="text-info">View all</a>
          </div>
          <p class="font-weight-500">The total number of sessions within the date range. It is the period time a user is
            actively engaged with your website, page or app, etc</p>
          <div id="sales-legend" class="chartjs-legend mt-4 mb-2"></div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Order Details</p>
          <p class="font-weight-500">The total number of sessions within the date range. It is the period time a user is
            actively engaged with your website, page or app, etc</p>

        </div>
      </div>
    </div>
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p class="card-title">Sales Report</p>
            <a href="#" class="text-info">View all</a>
          </div>
          <p class="font-weight-500">The total number of sessions within the date range. It is the period time a user is
            actively engaged with your website, page or app, etc</p>
          <div id="sales-legend" class="chartjs-legend mt-4 mb-2"></div>

        </div>
      </div>
    </div>
    <div class="col-md-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p class="card-title">Sales Report</p>
            <a href="#" class="text-info">View all</a>
          </div>
          <p class="font-weight-500">The total number of sessions within the date range. It is the period time a user is
            actively engaged with your website, page or app, etc</p>
          <div id="sales-legend" class="chartjs-legend mt-4 mb-2"></div>

        </div>
      </div>
    </div>
  </div> -->

</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
