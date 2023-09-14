import { AfterViewInit, Component } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit(): void {
    /**=====================
      Sticky Cart Bottom js
 ==========================**/
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var width_content = $(window).width();
      if (width_content > "300") {
        if (scroll >= 800) {
          $("body").addClass("stickyCart");
        } else {
          $("body").removeClass("stickyCart");
        }
      }
    });
  }
}
