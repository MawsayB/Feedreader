/* feedreader.js
 *
 * This is the spec file that Jasmine reads and contains
 * all of the tests that will be run against your application.
 */

/* All tests are within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.*/

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('have a url', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a name defined', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });
}());


    /* A new test suite named "The menu" */

    $(function() {

        describe('The menu', function() {

        /* A test that ensures the menu element is
         * hidden by default.*/

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.*/

         it('displays when clicked', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        it('hides when clicked again', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
}());

    /* TODO: Write a new test suite named "Initial Entries" */

    $(function() {

        describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed();
                done();
            });
        });

        it('should have at least one entry', function() {
            expect($('body').hasClass('.feed .entry')).toBe(true);
        });
}());

    /* A new test suite named "New Feed Selection" */

    $(function() {
        describe('New Feed Selection', function() {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         let feed1 = '';
         let feed2 = '';

        beforeEach(function(done) {
            loadFeed(0, function() {
                //feed 0 done loading
            feed1 = $('.feed .entry').html();
            console.log(feed1);
            loadFeed(1, function() {
                //feed 1 done loading
            feed2 =  $('.feed .entry').html();
            console.log(feed2);
                //all variables initialized can begin tests
            done();
            });
        });
    });

        it('changes content when a new feed is loaded', function() {
            expect(feed1).not.toBe(feed2);
            });
        });
    }());
