# time-segments.js

Group event data into segments of time.

### Motivation

Displaying data along a timeline requires grouping that data. Consider
displaying events on a calendar. If the calendar has a resolution of
weeks, and each week can be represented by at most one item,
then all of the events for a given week will need to be
grouped together.

### Terminology

##### Event

An Event is an object with at least properties:

`start` - A start time as a unix timestamp  
`end` - An end time as a unix timestamp

It is almost always the case that events will have a unique ID, and
possibly other data, associated with them. This library is agnostic
to that extra data.

##### Scale

The Scale is the resolution of the segmenting. It can be any of the
resolutions supported by [moment.js](http://momentjs.com/). A short
list of examples include `days`, `years`, `weeks`. Moment's abbrevations
are also supported, as in `w` for `weeks.`

##### Segments

Segments are an Object representing the groups of events. Each key of the Object
is the starting unix timestamp of the segment. The value of each key is the array
of events that occur during that segment.

### API

This library exposes a single method. It takes in an array of Events
and returns an array of Segments.

##### `group( events, scale [, options] )`

Takes in an array of `events` and a `scale`, returns a `segments` Object.
Optionally pass `options` to configure the algorithm.

The available options are:

`startAttribute` - the name of each Event's start attribute  
`endAttribute` - the name of each Event's end attribute

