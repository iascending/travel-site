import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    this.lazyLoadImg = $(".lazyload");
    this.stickyHeader = $('.site-header');
    this.triggerElement = $('.large-hero__title');
    this.createStickyHeader();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  refreshWaypoints() {
    this.lazyLoadImg.on('load', function(){
      Waypoint.refreshAll();
    })
  }

  createStickyHeader() {
    var that = this;
    new Waypoint({
      element: this.triggerElement[0],
      handler: function(direction){
        if (direction == 'down') {
          that.stickyHeader.addClass('site-header--dark');
        } else {
          that.stickyHeader.removeClass("site-header--dark");
        }
      }

    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element:currentPageSection,
        handler: function(direction){
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      })
      new Waypoint({
        element:currentPageSection,
        handler: function(direction){
          if (direction=="up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      })
    });
  }
}

export default StickyHeader;
