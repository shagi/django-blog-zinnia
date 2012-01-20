$(document).ready(function() {
  mySettings['previewParserPath'] = '{% url zinnia_markitup_preview %}';
  $("#id_content").markItUp(mySettings);
});
