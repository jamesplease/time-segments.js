# time-segments.js

Transform continuous event data into time segments groups.

### Motivation

Displaying data along a timeline requires grouping that data. An example is
displaying events on a calendar. If the calendar is showing events on
a timeline of weeks, and each week can be represented by at most one block,
then all of the events for a given week will need to be grouped together.

### Terminology

##### Event

An Event is an object with three properties:

`id` - A unique identifier  
`start` - A start time as a unix timestamp  
`end` - An end time as a unix timestamp

##### Scale

The Scale is the resolution used for grouping. It can be any of the
resolutions supported by [moment.js](http://momentjs.com/). A short
list of examples include `days`, `years`, `weeks`. Moment's abbrevations
are also supported, as in `w` for `weeks.`

##### Segment

A Segment is a group that is a single unit of Scale. Segments
contain Events.

`events` - An array of events that take place during the segment  
`start` - A start time as a unix timestamp  
`end` - An end time as a unix timestamp  

This library exposes a single method. It takes in an array of Events
and returns an array of Segments.

### API

##### `group( events, scale [, options] )`

Takes in an array of `events` and a `scale`, returns an array of `segments`.
Optionally pass `options` to configure the algorithm.

The available options are:

`idAttribute` - the name of each Event's ID attribute  
`startAttribute` - the name of each Event's start attribute  
`endAttribute` - the name of each Event's end attribute

