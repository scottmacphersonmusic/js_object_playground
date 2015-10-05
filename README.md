# js_object_playground
By [Scott Macpherson](https://github.com/scottmacphersonmusic)

### Description
js_object_playground is a small project to practice creating JS objects.

### Usage
To create a new `Performance` object, pass it a venue name, a `Date` object (with year, month, day, hours and minutes) and the compensation as an integer:

```javascript
var date = new Date(2015, 10, 7, 20, 30);
var performance = new Performance('Paramount', date, 350);
```

##### Methods
There are several methods available on a `Performance` object, including:
- `toString()`
  - returns a nicely formatted string describing the venue, date and compensation properties
- `paysEnough()`
  - Returns `false` if the `Performance` instance pays less than $200 or starts before noon and pays less than $400 - returns `true` otherwise
- `changeVenue(newVenue)`
  - Updates the `venue` property
- `changeDate(newDate)`
  - Updates the `date` property (must be a `Date` object)
- `changeCompensation(newCompensation)`
  - Updates the `compensation` property

### Contributing
1. Fork It
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

### Credit
This README was edited at [dillinger.io](dillinger.io)
