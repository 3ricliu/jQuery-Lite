/* global $l */

(function(){
  // if (typeof Assessment === "undefined") {
  //   window.Assessment = {};
  // }
  //
  // window.hello = function () {
  //   console.log("hello");
  // };



  window.$l = function (selector) {
    var nodeList;
    if(selector instanceof HTMLElement){
      nodeList = selector;
    } else if(typeof selector === "string"){
      nodeList = document.querySelectorAll(selector);
    }

    var arrayNodeList = Array.prototype.slice.call(nodeList);
    return new DOMNodeCollection(arrayNodeList);
  };


  var DOMNodeCollection = function(htmlElements) {
    this.htmlElements = htmlElements;
  };

  DOMNodeCollection.prototype.html = function(){
    var firstArg = arguments[0];
    if(firstArg !== undefined){
      this.htmlElements.forEach(function(el) {
      el.innerHTML = firstArg;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }
  };

  DOMNodeCollection.prototype.empty = function () {
    this.html("");
  };

  DOMNodeCollection.prototype.append = function (arg) {
    var that = this;
    // console.log(that);
    // console.log(that.htmlElements);
      // this.htmlElements[0].innerHTML += arg.outerHTML;
      // this.htmlElements[0].appendChild(arg);
    // } else if( arg instanceof DOMNodeCollection){
    //     this.htmlElements.forEach(function(el) {
    //       el.innerHTML += el;
    //     });
  } else if (arg instanceof DOMNodeCollection){
      // debugger;
      arg.htmlElements.forEach(function(el){
        that.append(el.cloneNode(true));
      });


// -----
      // for(var i = 0; i < arg.htmlElements.length; i++) {
      //   // debugger;
      //   this.htmlElements.forEach(function(currList) {
      //     // debugger;
      //     // var dupNode = .cloneNode();
      //     currList.appendChild(arg.htmlElements[i].cloneNode(true));
      //   });
      //   // debugger;
      // }


      // -----
    // arg.htmlElements.forEach(function(el){
    //
    //   that.htmlElements.forEach(function (currList) {
    //     currList.appendChild(el);
    //   });
    //   // console.log("firstLog " + that);
    //   // console.log(that.htmlElements);
    //   // that.append(el);
    //   //   console.log("secondLog " + that);
    // });
  } else {
      this.htmlElements.forEach(function(el) {
        el.innerHTML += arg;
      });
    }

  };





})();

// var hello = "asdf";
// function hello () {
//   console.log("hello");
// }


// bound_funcy = funcy.bind(this)
// bound_funcy()
