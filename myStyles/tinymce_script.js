tinymce.init({
    selector:"#img-tinymce",
    forced_root_block: '',
    setup: function(editor) {
      editor.on('blur', function(){
        if(!catching){
          bounceProtect('blur');
          let m_id = $("#img-tinymce").attr("data-id");
          setMyContentImg(m_id);
        }
      })
    },
    height: "115",
    width: "115",
    visual : false,
    image_dimensions: false,
    image_description: false,
    toolbar: "image |",
    plugins: [
      "image imagetools media fullscreen advlist autolink lists link image imagetools charmap print preview anchor"
    ],
    menubar: false,
    statusbar: false,
    convert_urls: false,
    file_picker_callback: elFinderBrowser
  });
  tinymce.init({
    selector:"#img-tinymce-second",
    forced_root_block: '',
    setup: function(editor) {
      editor.on('blur', function(){
        if(!catching){
          bounceProtect('blur');
          let m_id = $("#img-tinymce-second").attr("data-id");
          setMyContentImg2(m_id);
        }
      })
    },
    height: "115",
    width: "115",
    visual : false,
    image_dimensions: false,
    image_description: false,
    toolbar: "image |",
    plugins: [
      "image imagetools media fullscreen advlist autolink lists link image imagetools charmap print preview anchor"
    ],
    menubar: false,
    statusbar: false,
    convert_urls: false,
    file_picker_callback: elFinderBrowser
  });
  tinymce.init({
    selector:"#m-tinymce",
    forced_root_block: '',
    setup: function(editor) {
      editor.on('blur', function(){
        if(!catching){
          bounceProtect('blur');
          let m_id = $("#m-tinymce").attr("data-id");
          setMyContent(m_id);
        }
      })
    },
    visual : false,
    toolbar: "undo redo | subscript superscript | fontselect fontsizeselect | bold italic underline | forecolor backcolor | bullist numlist | link |",
    plugins: [
      "advlist autolink lists link image imagetools charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table contextmenu paste",
      "textcolor colorpicker",
      "image imagetools",
      "noneditable",
      "autoresize"
    ],
    menubar: false,
    statusbar: false,
    convert_urls: false,
    file_picker_callback: elFinderBrowser
  });
  tinymce.init({
    selector:"#m-tinymce-second",
    forced_root_block: '',
    setup: function(editor) {
      editor.on('blur', function(){
        if(!catching){
          bounceProtect('blur');
          let m_id = $("#m-tinymce-second").attr("data-id");
          setMyContent2(m_id);
        }
      })
    },
    visual : false,
    toolbar: "undo redo | subscript superscript | fontselect fontsizeselect | bold italic underline | forecolor backcolor | bullist numlist | link |",
    plugins: [
      "advlist autolink lists link image imagetools charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table contextmenu paste",
      "textcolor colorpicker",
      "image imagetools",
      "noneditable",
      "autoresize"
    ],
    menubar: false,
    statusbar: false,
    convert_urls: false,
    file_picker_callback: elFinderBrowser
  });

  let catching = false;

  function bounceProtect(src)
  {
    catching = true;
    setTimeout(function(){ catching = false;}, 250);
  }

  function setMyContent(m_id) {
    document.getElementById('right-text-content-'+m_id).innerHTML = tinymce.get('m-tinymce').getContent();
  }
  function setMyContentImg(m_id) {
    document.getElementById('right-img-content-'+m_id).innerHTML = tinymce.get('img-tinymce').getContent();
  }

  function setMyContent2(m_id) {
    document.getElementById('left-text-content-'+m_id).innerHTML = tinymce.get('m-tinymce-second').getContent();
  }
  function setMyContentImg2(m_id) {
    document.getElementById('left-img-content-'+m_id).innerHTML = tinymce.get('img-tinymce-second').getContent();
  }

  function elFinderBrowser (callback, value, meta) {
    tinymce.activeEditor.windowManager.open({
      file: 'elfinder/elfinder.html',// use an absolute path!
      title: 'Upload an Image',
      width: 900,
      height: 450,
      resizable: 'yes'
    }, {
      oninsert: function (file, fm) {
        var url, reg, info;

        // URL normalization
        url = fm.convAbsUrl(file.url);

        // Make file info
        info = file.name + ' (' + fm.formatSize(file.size) + ')';

        // Provide file and text for the link dialog
        if (meta.filetype == 'file') {
          callback(url);
        }

        // Provide image and alt text for the image dialog
        if (meta.filetype == 'image') {
          callback(url, {alt: info});
        }

        // Provide alternative source and posted for the media dialog
        if (meta.filetype == 'media') {
          callback(url);
        }
      }
    });
    return false;
  }