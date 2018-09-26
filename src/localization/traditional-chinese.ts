import { editorLocalization } from "../editorLocalization";

var traditionalChineseTranslation = {
  // strings for survey templates
  survey: {
    edit: "編輯",
    dropQuestion: "請將問題放置於此",
    copy: "複製",
    addToToolbox: "添加到工具箱",
    deletePanel: "刪除面板",
    deleteQuestion: "刪除題目",
    convertTo: "轉變為"
  },
  // strings for question types
  qt: {
    checkbox: "多項選擇",
    comment: "多行文本框",
    dropdown: "下拉框",
    file: "文件上傳",
    html: "Html 代碼",
    matrix: "矩陣 (單選題)",
    matrixdropdown: "矩陣 (下拉框)",
    matrixdynamic: "矩陣 (動態問題)",
    multipletext: "文本框組",
    panel: "面板",
    paneldynamic: "面板(動態)",
    radiogroup: "單項選擇",
    rating: "評分",
    text: "文本框",
    boolean: "布林選項",
    expression: "表達式"
  },
  // strings for editor
  ed: {
    survey: "調查問捲",
    editSurvey: "修改",
    addNewPage: "添加新頁面",
    deletePage: "刪除頁面",
    editPage: "編輯頁面",
    newPageName: "頁面",
    newQuestionName: "問題",
    newPanelName: "面板",
    testSurvey: "測試問捲",
    testSurveyAgain: "再次測試問捲",
    testSurveyWidth: "問捲寬度: ",
    embedSurvey: "將問捲嵌入網頁",
    saveSurvey: "保存問捲",
    designer: "問捲設計器",
    jsonEditor: "JSON 編輯器",
    undo: "還原",
    redo: "重做",
    options: "選項",
    generateValidJSON: "生成 JSON",
    generateReadableJSON: "生成易讀的 JSON",
    toolbox: "工具箱",
    delSelObject: "刪除所選對象",
    editSelObject: "編輯所選對象",
    correctJSON: "修正 JSON",
    surveyResults: "問卷結果: ",
    modified: "已修改",
    saving: "保存中...",
    saved: "已保存"
  },
  //Property names in table headers
  pel: {
    isRequired: "是否為必填項?"
  },
  // strings for property editors
  pe: {
    apply: "應用",
    ok: "確定",
    cancel: "取消",
    reset: "重置",
    close: "關閉",
    delete: "刪除",
    addNew: "新建",
    removeAll: "全部刪除",
    edit: "編輯器",
    empty: "<空>",
    fastEntry: "快速輸入",
    formEntry: "表單輸入",
    testService: "測試服務",
    showMore: "更多細節...",
    conditionHelp:
      "請輸入一個布林表達式。當布林值為真，問題/頁面可見。例如：{question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "請輸入一項條件判斷。當條件判斷為真時問題/頁面將可見。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
    propertyIsEmpty: "請為該屬性設定一個值",
    value: "值",
    text: "顯示文本",
    columnEdit: "編輯列: {0}",
    itemEdit: "編輯選項: {0}",
    hasOther: "可添加其他答案?",
    otherText: "其他答案文本",
    url: "URL",
    path: "Path",
    valueName: "Value name",
    titleName: "Title name",
    name: "題目名",
    title: "題目文本",
    cellType: "單元格類型",
    colCount: "列數",
    choicesOrder: "設置選項順序",
    visible: "是否可見?",
    isRequired: "是否為必填項?",
    startWithNewLine: "問題是否新起一行?",
    rows: "文本框行數",
    placeHolder: "占位文本",
    showPreview: "是否顯示圖像預覽?",
    storeDataAsText: "以 JSON 文本方式存儲文件",
    maxSize: "文件最大尺寸 (Bytes)",
    imageHeight: "圖片高度",
    imageWidth: "圖片寬度",
    rowCount: "默認行數",
    addRowText: "添加條目按鈕文本",
    removeRowText: "刪除條目按鈕文本",
    minRateDescription: "最小值提示",
    maxRateDescription: "最大值提示",
    inputType: "文本框類型",
    optionsCaption: "下拉框提示語",
    qEditorTitle: "編輯問題: {0}",
    //survey
    showTitle: "顯示/隱藏 標題",
    locale: "默認語言",
    mode: "模式 (編輯/只讀)",
    clearInvisibleValues: "清除隱藏值",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "顯示頁面標題",
    showPageNumbers: "顯示頁數",
    pagePrevText: "前一頁按鈕文本",
    pageNextText: "後一頁按鈕文本",
    completeText: "完成按鈕文本",
    startSurveyText: "開始按鈕文本",
    showNavigationButtons: "顯示導航按鈕 (默認導航)",
    showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
    firstPageIsStarted: "調查的第一頁面為起始頁.",
    showCompletedPage: "結尾展示完成後的頁面 (completedHtml)",
    goNextPageAutomatic: "回答本頁所有問題後，自動跳轉到下一頁",
    showProgressBar: "顯示進度條",
    questionTitleLocation: "問題的標題位置",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "問題起始標誌 (1, 2 or 'A', 'a')",
    showQuestionNumbers: "顯示問題編號",
    questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
    questionErrorLocation: "問題錯誤定位",
    focusFirstQuestionAutomatic: "改變頁面時聚焦在第一個問題",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "完成調查的最長時間",
    maxTimeToFinishPage: "完成調查中頁面的最長時間",
    showTimerPanel: "顯示計時器面板",
    showTimerPanelMode: "顯示計時器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允許添加面板",
    allowRemovePanel: "允許刪除面板",
    panelAddText: "添加面板文本",
    panelRemoveText: "刪除面板文本",
    isSinglePage: "在一個頁面上展示所有元素",
    tabs: {
      general: "通用項",
      navigation: "導航",
      question: "問題",
      completedHtml: "完成後的Html",
      loadingHtml: "加載中的Html",
      timer: "問捲計時器",
      trigger: "觸發器",
      fileOptions: "選項",
      html: "HTML 編輯器",
      columns: "設置列",
      rows: "設置行",
      choices: "設置選項",
      visibleIf: "設置可見條件",
      enableIf: "Enable If",
      rateValues: "設置評分值",
      choicesByUrl: "通過 URL 導入選項",
      matrixChoices: "默認選項",
      multipleTextItems: "文本輸入",
      validators: "校驗規則"
    },
    editProperty: "編輯屬性: '{0}'",
    items: "[ 項目數量: {0} ]",
    enterNewValue: "請設定值",
    noquestions: "問捲中還沒有創建任何問題",
    createtrigger: "請創建觸發器",
    triggerOn: "當 ",
    triggerMakePagesVisible: "使頁面可見:",
    triggerMakeQuestionsVisible: "使問題可見:",
    triggerCompleteText: "如果滿足條件，則完成問捲",
    triggerNotSet: "觸發器尚未設置",
    triggerRunIf: "滿足下列條件時執行",
    triggerSetToName: "修改下列問題值: ",
    triggerSetValue: "修改為: ",
    triggerIsVariable: "在問捲提交結果中不要包含該變量"
  },
  // strings for operators
  op: {
    empty: "為空",
    notempty: "不為空",
    equal: "等於",
    notequal: "不等於",
    contains: "包含",
    notcontains: "不包含",
    greater: "大於",
    less: "小於",
    greaterorequal: "大於等於",
    lessorequal: "小於等於"
  },
  // strings for embed window
  ew: {
    angular: "使用 Angular 時",
    jquery: "使用 JQuery 時",
    knockout: "使用 Knockout 時",
    react: "使用 React 時",
    vue: "使用 Vue 時",
    bootstrap: "使用 Bootstrap 時",
    standard: "不使用 Bootstrap 時",
    showOnPage: "嵌入頁面顯示",
    showInWindow: "使用單獨的問捲視窗",
    loadFromServer: "從服務器加載問捲 JSON 數據",
    titleScript: "腳本和樣式",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  validators: {
    answercountvalidator: "數量檢查",
    emailvalidator: "Email",
    numericvalidator: "數字",
    regexvalidator: "正則表達式",
    textvalidator: "文本"
  },
  triggers: {
    completetrigger: "完成問捲",
    setvaluetrigger: "設置問題值",
    visibletrigger: "修改可見性"
  },
  // strings of properties
  p: {
    commentText: "備註文本",
    choices: "選項",
    choicesByUrl: "Url選項",
    choicesOrder: "選項排序",
    colCount: "列數",
    correctAnswer: "正確答案",
    defaultVaule: "預設選項",
    description: "說明",
    enableIf: "允許判斷",
    hasComment: "hasComment",
    hasOther: "允許其他答案",
    otherText: "其他答案文本",
    page: "所在頁面",
    readOnly: "只讀",
    indent: "縮排",
    isRequired: "必填",
    requiredErrorText: "requiredErrorText",
    otherErrorText: "requiredErrorText",
    startWithNewLine: "允許問題在新行",
    //survey
    showTitle: "顯示/隱藏 標題",
    locale: "默認語言",
    mode: "模式 (編輯/只讀)",
    clearInvisibleValues: "清除隱藏值",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "顯示頁面標題",
    showPageNumbers: "顯示頁數",
    pagePrevText: "前一頁按鈕文本",
    pageNextText: "後一頁按鈕文本",
    completeText: "完成按鈕文本",
    startSurveyText: "開始按鈕文本",
    showNavigationButtons: "顯示導航按鈕 (默認導航)",
    showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
    firstPageIsStarted: "調查的第一頁面為起始頁.",
    showCompletedPage: "結尾展示完成後的頁面 (completedHtml)",
    goNextPageAutomatic: "回答本頁所有問題後，自動跳轉到下一頁",
    showProgressBar: "顯示進度條",
    questionTitleLocation: "問題的標題位置",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "問題起始標志 (1, 2 or 'A', 'a')",
    showQuestionNumbers: "顯示問題編號",
    questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
    questionErrorLocation: "問題錯誤定位",
    focusFirstQuestionAutomatic: "改變頁面時聚焦在第一個問題",
    questionsOrder: "頁面中元素的順序",
    maxTimeToFinish: "完成調查的最長時間",
    maxTimeToFinishPage: "完成調查中頁面的最長時間",
    showTimerPanel: "顯示計時器面板",
    showTimerPanelMode: "顯示計時器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允許添加面板",
    allowRemovePanel: "允許刪除面板",
    panelAddText: "添加面板文本",
    panelRemoveText: "刪除面板文本",
    isSinglePage: "在一個頁面上展示所有元素",
    name: "名字",
    title: {
      name: "標題",
      title: "如果與名字相同，請設置為空值"
    },
    survey_title: {
      name: "標題",
      title: "問捲標題在每頁上都會顯示"
    },
    page_title: {
      name: "標題",
      title: "頁面標題"
    }
  }
};

editorLocalization.locales["zh-tw"] = traditionalChineseTranslation;
