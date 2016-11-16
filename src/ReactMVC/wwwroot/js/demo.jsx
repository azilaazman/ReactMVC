var Nav = React.createClass({
   _addPlant: function () {
       this.props.onAddPlant();
   },
   _dashboard:function(){
       this.props.onDashboard();
   },
  render: function() {
    return (

      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#"><img src="../assets/ceres-logo2.png"/></a>
        </div>{/* /.navbar-header */}
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-user fa-fw" />  <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="#"><i className="fa fa-user fa-fw" /> User Profile</a>
              </li>
              <li>
                <a href="settings.html"><i className="fa fa-gear fa-fw" /> Settings</a>
              </li>
              <li className="divider" />
              <li>
                <a href="login.html"><i className="fa fa-sign-out fa-fw" /> Logout</a>
              </li>
            </ul>{/* /.dropdown-user */}
          </li>{/* /.dropdown */}
        </ul>{/* /.navbar-top-links */}
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
              <li className="sidebar-search">
                <div className="input-group custom-search-form">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>{/* /input-group */}
              </li>
              <li onClick={this._dashboard}>
                <a><i className="fa fa-dashboard fa-fw" /> Dashboard</a>
              </li>


              <li onClick={this._addPlant}>
                <a><i className="fa fa-plus fa-fw" /> Add a new plant..</a>
                
              </li>
            </ul>
          </div>{/* /.sidebar-collapse */}
        </div>{/* /.navbar-static-side */}
      </nav>
    );
  }
});
var WrapperMain = React.createClass({
    loadPlantFromServer: function () {               
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            var length = data.length;
            //console.log(data[length - 1]);
            var lastData = data[length - 1]; //the json data that we want
            this.setState({ name: lastData['name'] });
            var gc = lastData['growing_conditions'];
            this.setState({ temp: gc['temp'] });
            this.setState({ humid: gc['humid'] });
            this.setState({ light: gc['light'] });
            this.setState({ power: gc['power'] });
        }.bind(this);
        xhr.send();
    },
   getInitialState: function(){
        return {
            main: true,
            name: '-',
            temp: '-',
            humid: '-',
            water: '-',
            care: '-',
            light: '-',
            power: '-',
        }
    },
   componentDidMount: function(){
       this.setState({
           main: true
       })
       this.loadPlantFromServer();
      //console.log("cdm main:" + this.state.main);
   },
   render: function() {
        return (
          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>
              </div>
        {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-thermometer-empty fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.temp}°C</div>
                    <div>Temperature</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-green">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-tint fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.humid}%</div>
                    <div>Humidity</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-yellow">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-bolt fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.power}W</div>
                    <div>Electricity</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-red">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-sun-o fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.light}lm</div>
                    <div>Light Intensity</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-success">
              <div className="panel-heading">
                <i className="fa fa-info-circle fa-fw" /> Information Panel
              </div>
        {/* /.panel-heading */}
        <div className="panel-body">
          <h4>Your CERES Unit is growing <span className="text-success">{this.state.name}<i className="fa fa-pagelines" aria-hidden="true" /></span></h4>
          <div className="list-group">
            <a href="#" className="list-group-item">
              <i className="fa fa-birthday-cake fa-fw" /> 10 January 1997
              <span className="pull-right text-muted small">
                <em>19 years ago</em>
              </span>
            </a>
            <a href="#" className="list-group-item">
              <i className="fa fa-hourglass-end fa-fw" /> 28 November 2016
              <span className="pull-right text-muted small">
                <em>24 days to go</em>
              </span>
            </a>
            <a href="#" className="list-group-item">
              <i className="fa fa-heartbeat fa-fw" /> 120bpm
              <span className="pull-right text-muted small">
                <em> Who knew plants could breathe?</em>
              </span>
            </a>
            <a href="#" className="list-group-item">
              <i className="fa fa-lock fa-fw" /> Locked
              <span className="pull-right text-muted small">
                <em>last opened 2 days ago</em>
              </span>
            </a>
          </div>
        {/* /.list-group */}
        <a href="#" className="btn btn-default btn-block">View All Info</a>
      </div>
        {/* /.panel-body */}
        </div>
        {/*/.panel*/}
        </div>
        {/*/.col-md-6 */}
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <i className="fa fa-bar-chart-o fa-fw" />Sunlight Intensity
            </div>
        {/* /.panel-heading */}
        <div className="panel-body">
          <div className="flot-chart">
            <div className="flot-chart-content" id="flot-line-chart-moving" style={{height: 400}} />
                  </div>
                </div>
              {/* /.panel-body */}
            </div>
{/* /.panel */}
          </div>
{/* /.col-lg-12 */}
</div>
{/* /.row */}
</div>
    );
}
});
var WrapperAddPlant = React.createClass({
    getInitialState: function(){
        return {
            main: false,
            name: '',
            temp: '',
            humid: '',
            water: '',
            care: '',
            light: '',
            power: '',

        }
    },
    componentDidMount: function(){
        this.setState({
            main: false
        })
    },
    onNameChange: function(e){
        this.setState({ name: e.target.value });
    },
    onTempChange: function (e) {
        this.setState({ temp: e.target.value });
    },
    onHumidChange: function (e) {
        this.setState({ humid: e.target.value });
    },
    onWaterChange: function (e) {
        this.setState({ water: e.target.value });
    },
    onCareLevelChange: function (e) {
        var e = document.getElementById("ddlCareLevel");
        this.setState({ care: e.options[e.selectedIndex].text})
    },
    onPowerChange: function (e) {
        this.setState({ power: e.target.value });
    },
    onLightChange: function (e) {
        this.setState({ light: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var temp = this.state.temp.trim();
        var humid = this.state.humid.trim();
        var water = this.state.water.trim();
        var care = this.state.care.trim();
        var light = this.state.light.trim();
        var power = this.state.power.trim();

        //no validation
       this.onServerSubmit({ name: name, temp: temp, humid: humid, water: water, care: care, light: light, power: power });        
    },
    onServerSubmit: function (plant) {
        //var plants = this.state.data;
        // Optimistically set an id on the new comment. It will be replaced by an
        // id generated by the server. In a production application you would likely
        // not use Date.now() for this and would have a more robust system in place.
        plant._id = Date.now();
        //var newPlants = plants.concat([plant]);
        //this.setState({ data: newPlants });

        // TODO: submit to the server and refresh the list
        var data = {
            name: plant.name,
            temp: plant.temp,
            humid: plant.humid,
            water: plant.water,
            care: plant.care,
            light: plant.light,
            power: plant.power
        }

        //phase 2: perform front end validation. 
        //if(valid){$.ajax.. }
        $.ajax({
            type: "POST",
            url: this.props.submitUrl,
            data: data,
            success: function (data) {
                //clear form
                this.setState({ name: '', temp: '', humid: '', water: '', light: '', power: ''});
                alert("Plant " + plant.name + " added!");
            }.bind(this),
            error: function (e) {
                console.log(e);
                alert('Error: Add plant failed');
            }
        })
        console.log(data);

        //var xhr = new XMLHttpRequest();
        //xhr.open('post', this.props.submitUrl, true);
        //xhr.send(data);
    },
    render: function() {
        return (

          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Add a New Plant</h1>
              </div>
        {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                Basic Information
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form role="form">
                      <label>Plant Name</label>
                      <div className="form-group input-group">
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button"><i className="fa fa-search" />
                          </button>
                        </span>
                      </div>
                      <div className="form-group input-group">
                        <input id="power" type="text" className="form-control" placeholder="Power" value={this.state.power} onChange={this.onPowerChange}/>
                           <span className="input-group-addon">W</span>
                      </div>
                      <div className="form-group input-group">
                        <input id="light" type="text" className="form-control" placeholder="Light Intensity" value={this.state.light} onChange={this.onLightChange}/>
                        <span className="input-group-addon">lm</span>
                      </div>

                      {/*<div className="form-group">
                        <label>Upload Presets</label>
                        <input type="file" />
                      </div>*/}
                    </form>
                  </div>
        {/* /.col-lg-6 (nested) */}
        <div className="col-lg-6">
          <label>Environment Presets</label>
          <form role="form">
            <div className="form-group input-group">
              <input id="temp" type="text" className="form-control" placeholder="Temperature" value={this.state.temp} onChange={this.onTempChange} />
              <span className="input-group-addon">°C</span>
            </div>
            <div className="form-group input-group">
              <input id="humidity" type="text" className="form-control" placeholder="Humidity" value={this.state.humid} onChange={this.onHumidChange} />
              <span className="input-group-addon">%</span>
            </div>
            <div className="form-group input-group">
              <input id="water-level" type="text" className="form-control" placeholder="Water Level" value={this.state.water} onChange={this.onWaterChange} />
              <span className="input-group-addon">cm</span>
            </div>
            <div className="form-group">
              <label>Care Level</label>
              <select id="ddlCareLevel" className="form-control" onChange={this.onCareLevelChange}>
                <option value="0">Select care level..</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-success btn-md pull-right" data-toggle="modal" data-target="#myModal" onClick={this.handleSubmit}>
          Add Plant
        </button>
        {/* Modal */}
        <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel">Success!</h4>
              </div>
              <div className="modal-body">
                Your new plant has been added!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <a href="index.html" className="btn btn-primary">Back to Dashboard</a>
              </div>
            </div>
        {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        </form>
      </div>
        {/* /.col-lg-6 (nested) */}
        </div>
        {/* /.row (nested) */}
        </div>
        {/* /.panel-body */}
        </div>
        {/* /.panel */}
        </div>
        {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
        </div>
      );
    }
});

var Content = React.createClass({
    getInitialState: function () {
        return {
            main: true,
            addPlant: false
        }
    },
    checkMain: function () {
        if(this.state.addPlant){
            this.setState({
                main: true,
                addPlant: false
            })
        }
    },
    checkAddPlant: function () {
        if(this.state.main){
            this.setState({
                main: false,
                addPlant: true
            })
        }
    },
    render: function () {
        if (this.state.main) {
            return (
            <div>
            <Nav onAddPlant={this.checkAddPlant} onDashboard={this.checkMain} />
            <WrapperMain url="/plants"/>
            </div>
            );
        }
        else {
            return (
            <div>
            <Nav onAddPlant={this.checkAddPlant} onDashboard={this.checkMain}/>
            <WrapperAddPlant url="/plants" submitUrl="/plants/new"/>
            </div>
            );
        }
        }
           
});
ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
