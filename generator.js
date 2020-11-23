/*["dep","arr","fltnbr",[["waypoint", lat, lon, alt, e, f],*/
let dep, arr, fltnbr, waypoint, lat, lon, alt, full, waypoints
let blank = ''
let e = "False"
let f = "None"
let divider = ', '
var openbracket = '['
var closebracket = ']'
var quote = '"'
var data = JSON.parse('{"ABAPU":[[-17.82732,19.03378]],"UDBUP":[[52.42778,-55.53145]],"BESEN":[[50.42846,-105.83645]],"NADLU":[[50.49248,-105.76412]],"PENBU":[[50.21247,-105.23255]]}')
function setVar() {
  //set a variable to a value
}
function addWaypointString() {
  waypoint = openbracket+quote+waypoint+quote+divider+lat+divider+lon+divider+alt+divider+e+divider+f+closebracket
}
function makeRoute() {
  header = openbracket+quote+dep+quote+divider+quote+arr+quote+divider+quote+fltnbr+quote+divider
  full = header+waypoints+closebracket
}
