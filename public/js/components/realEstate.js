webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '25899 Rose Road',
  city: 'Westlake',
  state: 'OH',
  rooms: 3,
  price: 204900,
  floorSpace: 1200,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg'
}, {
  address: '178 Detroit Road',
  city: 'Westlake',
  state: 'OH',
  rooms: 4,
  price: 215600,
  floorSpace: 1400,
  extras: ['elevator'],
  homeType: 'House',
  image: 'https://i.cbc.ca/1.4118910.1494983173!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/house.jpg'
}, {
  address: '1799 Marsha Drive',
  city: 'North Olmsted',
  state: 'OH',
  rooms: 2,
  price: 175900,
  floorSpace: 2500,
  extras: ['elevator'],
  homeType: 'Apartment',
  image: 'https://cdnimages.familyhomeplans.com/plans/49571/49571-b600.jpg'
}, {
  address: '1900 Stryker Road',
  city: 'Seven Hills',
  state: 'OH',
  rooms: 5,
  price: 310000,
  floorSpace: 1900,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://cdnimages.familyhomeplans.com/plans/59155/59155-b600.jpg'
}, {
  address: '4559 Arthur Avenue',
  city: 'Cleveland',
  state: 'OH',
  rooms: 3,
  price: 149900,
  floorSpace: 1400,
  extras: ['elevator', 'gym'],
  homeType: 'Home',
  image: 'http://www.dreamhomesource.com/house-plans/media/catalog/product/cache/3/image/820x615/9df78eab33525d08d6e5fb8d27136e95/F/B/FBA409-FR-PH-CO-LG.JPG'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default,
      housetype: "Home",
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 75000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false
    };
    _this.change = _this.change.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
      });
      console.log(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, allState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.listingsData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'h4',
          null,
          ' Filter '
        ),
        _react2.default.createElement(
          'select',
          { name: 'neighborhood', className: 'filters neighborhood', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'Westlake' },
            'Westlake'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Seven Hills' },
            'Seven Hills'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Cleveland' },
            'Cleveland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'North Olmsted' },
            'North Olmsted'
          )
        ),
        _react2.default.createElement(
          'select',
          { name: 'housetype', className: 'filters housetype', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'Home' },
            'Home'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Studio' },
            'Studio'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Apartment' },
            'Apartment'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Room' },
            'Room'
          )
        ),
        _react2.default.createElement(
          'select',
          { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: '1' },
            '1BR'
          ),
          _react2.default.createElement(
            'option',
            { value: '2' },
            '2BR'
          ),
          _react2.default.createElement(
            'option',
            { value: '3' },
            '3BR'
          ),
          _react2.default.createElement(
            'option',
            { value: '4' },
            '4BR'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters price' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Price'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.allState.min_price }),
          _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.allState.max_price })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters floor-space' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Floor Space'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.allState.min_floor_space }),
          _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.allState.max_floor_space })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters extras' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Extras'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras', onChange: this.props.change },
            _react2.default.createElement(
              'span',
              null,
              'Elevators'
            ),
            _react2.default.createElement('input', { name: 'elevator', type: 'checkbox', value: 'elevator' })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras', onChange: this.props.change },
            _react2.default.createElement(
              'span',
              null,
              'Swimming Pool'
            ),
            _react2.default.createElement('input', { name: 'swimming_pool', type: 'checkbox', value: 'swimming_pool' })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras', onChange: this.props.change },
            _react2.default.createElement(
              'span',
              null,
              'Finished Basement'
            ),
            _react2.default.createElement('input', { name: 'finished_basement', type: 'checkbox', value: 'finished basement' })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras', onChange: this.props.change },
            _react2.default.createElement(
              'span',
              null,
              'Gym'
            ),
            _react2.default.createElement('input', { name: 'gym', type: 'checkbox', value: 'gym' })
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'logo' },
            'Logo'
          ),
          _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Create Ads'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'About Us'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Log In'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'register-btn' },
              'Register'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Milos'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var listingsData = this.props.listingsData;

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'listing', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
            _react2.default.createElement(
              'span',
              { className: 'address' },
              listing.address
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-3' },
                _react2.default.createElement('div', { className: 'user-img' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-9' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'user-name' },
                    'Jake Roberts'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'post-date' },
                    '05/05/2017'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'floor-space' },
                    _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      listing.floorSpace,
                      ' ft\xB2'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'bedrooms' },
                    _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      listing.rooms,
                      ' bedrooms'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'view-btn' },
                  'View Listing'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'bottom-info' },
            _react2.default.createElement(
              'span',
              { className: 'price' },
              '$',
              listing.price
            ),
            _react2.default.createElement(
              'span',
              { className: 'location' },
              _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
              listing.city,
              ', ',
              listing.state
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        'Listings',
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price asc' },
                ' Highest Price '
              ),
              _react2.default.createElement(
                'option',
                { value: 'price dsc' },
                ' Lowest Price '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);