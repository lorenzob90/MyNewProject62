$(document).ready(function() {
  // LIBRARIES CODE
  function LIBTest2() {
    libtest2_debugService = null;

    function BasicInstanceLib() {
      basicinstancelib_debugService = null;
      /**
       * Describe this function...
       */
      this.changeMyBoxColor = changeMyBoxColor;

      function changeMyBoxColor() {
        return new Promise(function(resolve, reject) {
          // Block#: !va@$kjRQ-mce64G49jA
          com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("MyBox", '#ff0000');
        });
      }
      // Block#: fM]G^R8(m4`sKEHEN`e@
      function on_MyBox_Button_click(e) {
        try {
          // Block#: [:e?iZY#uH$E13eHR]h=
          changeMyBoxColor().then(response => {;
          });
          e.stopPropagation();
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      $('[obj-name="MyBox_Button"]').on('click', on_MyBox_Button_click);
    };
    var basicinstancelib = new BasicInstanceLib();

    function BasicInstanceLibTemplate(instance) {
      basicinstancelib_debugService = null;
      /**
       * Describe this function...
       */
      this.changeMyBoxColor = changeMyBoxColor;

      function changeMyBoxColor() {
        return new Promise(function(resolve, reject) {
          // Block#: !va@$kjRQ-mce64G49jA
          com.fc.JavaScriptDistLib.Container.setProperty["Background color"](instance, '#ff0000');
        });
      }
      // Block#: fM]G^R8(m4`sKEHEN`e@
      function on_MyBox_Button_click(e) {
        try {
          // Block#: [:e?iZY#uH$E13eHR]h=
          changeMyBoxColor().then(response => {;
          });
          e.stopPropagation();
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      $('[obj-name="' + instance + '_Button"]').on('click', on_MyBox_Button_click);
    };
    var basicinstancelib = new BasicInstanceLib();
    var basicinstancelib_MyBox = new BasicInstanceLibTemplate("MyBox");
    var basicinstancelib_MyBox2 = new BasicInstanceLibTemplate("MyBox2");
    // Block#: pXzI^?cN-.vj!S3HML$@
    function on_Button_click(e) {
      try {
        // Describe this function...
        // Block#: L9^irc!~]B3Jh,Q!x%9I
        basicinstancelib_MyBox2.changeMyBoxColor().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="Button"]').on('click', on_Button_click);
  };
  var libtest2 = new LIBTest2();

  function LIBTest2() {
    libtest2_debugService = null;

    function BasicInstanceLib() {
      basicinstancelib_debugService = null;
      /**
       * Describe this function...
       */
      this.changeMyBoxColor = changeMyBoxColor;

      function changeMyBoxColor() {
        return new Promise(function(resolve, reject) {
          // Block#: !va@$kjRQ-mce64G49jA
          com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("MyBox", '#ff0000');
        });
      }
      // Block#: fM]G^R8(m4`sKEHEN`e@
      function on_MyBox_Button_click(e) {
        try {
          // Block#: [:e?iZY#uH$E13eHR]h=
          changeMyBoxColor().then(response => {;
          });
          e.stopPropagation();
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      $('[obj-name="MyBox_Button"]').on('click', on_MyBox_Button_click);
    };
    var basicinstancelib = new BasicInstanceLib();

    function BasicInstanceLibTemplate(instance) {
      basicinstancelib_debugService = null;
      /**
       * Describe this function...
       */
      this.changeMyBoxColor = changeMyBoxColor;

      function changeMyBoxColor() {
        return new Promise(function(resolve, reject) {
          // Block#: !va@$kjRQ-mce64G49jA
          com.fc.JavaScriptDistLib.Container.setProperty["Background color"](instance, '#ff0000');
        });
      }
      // Block#: fM]G^R8(m4`sKEHEN`e@
      function on_MyBox_Button_click(e) {
        try {
          // Block#: [:e?iZY#uH$E13eHR]h=
          changeMyBoxColor().then(response => {;
          });
          e.stopPropagation();
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      $('[obj-name="' + instance + '_Button"]').on('click', on_MyBox_Button_click);
    };
    var basicinstancelib = new BasicInstanceLib();
    var basicinstancelib_MyBox = new BasicInstanceLibTemplate("MyBox");
    var basicinstancelib_MyBox2 = new BasicInstanceLibTemplate("MyBox2");
    // Block#: pXzI^?cN-.vj!S3HML$@
    function on_Button_click(e) {
      try {
        // Describe this function...
        // Block#: L9^irc!~]B3Jh,Q!x%9I
        basicinstancelib_MyBox2.changeMyBoxColor().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="Button"]').on('click', on_Button_click);
  };
  var libtest2 = new LIBTest2();
  // PROJECT CODE
  var _that = this;
  // Block#: 9zl]fL6kEJlGON2gP~%P
  function on_Button2_click(e) {
    try {
      // Block#: oGDVBy.1`s)W%VkG@`%*
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="PIPPO"]');
      showScreen.show();
      history.pushState({
        'view': 'PIPPO'
      }, 'PIPPO', 'PIPPO');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button2"]').on('click', on_Button2_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 966669-709998-475385-363764
