import { editorLocalization } from "../editorLocalization";

var persianStrings = {
  //survey templates
  survey: {
    edit: "ویرایش",
    dropQuestion: "لطفا از جعبه ابزار سوالی در اینجا قرار دهید",
    copy: "کپی",
    addToToolbox: "افزودن به جعبه ابزار",
    deletePanel: "حذف پنل",
    deleteQuestion: "حذف سوال",
    convertTo: "تبدیل به"
  },
  //questionTypes
  qt: {
    checkbox: "چند انتخابی",
    comment: "نظر",
    dropdown: "لیست انتخابی",
    file: "فایل",
    html: "Html",
    matrix: "ماتریس (تک انتخابی)",
    matrixdropdown: "ماتریس (چند انتخابی)",
    matrixdynamic: "ماتریس (سطرهای داینامیک)",
    multipletext: "متن چند خطی",
    panel: "پنل",
    paneldynamic: "پنل (پنل های داینامیک)",
    radiogroup: "تک انتخابی",
    rating: "رتبه بندی",
    text: "متن تک خطی",
    boolean: "صحیح و غلط",
    expression: "توصیفی"
  },
  //Strings in Editor
  ed: {
    defaultLocale: "پیش فرض ({0})",
    survey: "نظرسنجی",
    editSurvey: "ویرایش نظرسنجی",
    addNewPage: "درج صفحه جدید",
    moveRight: "اسکرول به راست",
    moveLeft: "اسکرول به چپ",
    deletePage: "حذف صفحه",
    editPage: "ویرایش صفحه",
    edit: "ویرایش",
    newPageName: "صفحه",
    newQuestionName: "سوال",
    newPanelName: "پنل",
    testSurvey: "آزمایش نظرسنجی",
    testSurveyAgain: "آزمایش دوباره نظرسنجی",
    testSurveyWidth: "عرض نظرسنجی: ",
    embedSurvey: "نظرسنجی توکار",
    translation: "ترجمه",
    saveSurvey: "ذخیره نظرسنجی",
    designer: "طراح نظرسنجی",
    jsonEditor: "ویرایشگر JSON",
    undo: "بازگردانی",
    redo: "بازانجام",
    options: "انتخاب ها",
    generateValidJSON: "تولید کد معتبر JSON",
    generateReadableJSON: "تولید کد خوانا JSON",
    toolbox: "جعبه ابزار",
    toolboxGeneralCategory: "عمومی",
    delSelObject: "حذف مورد انتخابی",
    editSelObject: "ویرایش مورد انتخابی",
    correctJSON: "لطفا JSON را تصحیح کنید.",
    surveyResults: "نتایج نظرسنجی: ",
    surveyResultsTable: "به صورت جدول",
    surveyResultsJson: "به صورت JSON",
    resultsTitle: "عنوان سوال",
    resultsName: "نام سوال",
    resultsValue: "محتوای پاسخ",
    resultsDisplayValue: "محتوای نمایشی",
    modified: "تغییر داده شده",
    saving: "در حال ذخیره",
    saved: "ذخیره شد",
    saveError: "خطا! محتوای ویرایشگر ذخیره نشده است.",
    translationAddLanguage: "زبانی را برای ترجمه انتخاب کنید",
    translationShowAllStrings: "نمایش تمام عبارات",
    translationShowAllPages: "نمایش تمام صفحات",
    translationNoStrings: "هیچ عبارتی برای ترجمه نیست، لطفا فیلتر را عوض کنید.",
    translationExportToSCVButton: "برون بری به CSV",
    translationImportFromSCVButton: "برون ریزی از CSV",
    translationMergeLocaleWithDefault: "ادغام {0} با زبان پیش فرض"
  },
  //Property names in table headers
  pel: {
    isRequired: "اجباری؟"
  },
  //Property Editors
  pe: {
    apply: "اعمال",
    ok: "تایید",
    cancel: "لغو",
    reset: "بازنشانی",
    close: "بستن",
    delete: "حذف",
    addNew: "افزودن",
    removeAll: "حذف همه",
    edit: "ویرایش",
    empty: "<خالی>",
    fastEntry: "تکمیل سریع",
    formEntry: "تکمیل فرم",
    testService: "بررسی سرویس",
    conditionHelp:
      "لطفا یک مقدار بولین توصیفی وارد کنید که صحیح یا غلط را برگرداند تا صفحه سوالات نمایش داده شود. برای مثال: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "لطفا یک عبارت توصیفی را وارد کنید. شما ممکن است از کروشه برای دسترسی به مقدار سوالات استفاده کنید. برای مثال: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",

    aceEditorHelp: "برای مشاهده نکات تکمیلی ctrl+space را بفشارید",
    aceEditorRowTitle: "سطر فعلی",
    aceEditorPanelTitle: "پنل فعلی",
    showMore: "برای اطلاعات بیشتر لطفا سند راهنما را مطالعه کنید",
    assistantTitle: "سوالات موجود:",

    propertyIsEmpty: "لطفا یک مقدار وارد کنید",
    value: "مقدار",
    text: "متن",
    columnEdit: "ویرایش ستون: {0}",
    itemEdit: "ویرایش آیتم: {0}",

    url: "URL",
    path: "Path",
    valueName: "نام مقدار",
    titleName: "نام عنوان",

    hasOther: "دارای آیتم دیگر",
    name: "نام",
    title: "عنوان",
    cellType: "نوع سلول",
    colCount: "تعداد ستون",
    choicesOrder: "ترتیب گزینه را انتخاب کنید",
    visible: "نمایش داده شود؟",
    isRequired: "ضروری است؟",
    startWithNewLine: "با سطر جدید شروع شود؟",
    rows: "تعداد سطر",
    placeHolder: "نگهدارنده متن",
    showPreview: "پیش نمایش تصویر نشان داده شود؟",
    storeDataAsText: "ذخیره کردن محتوای فایل در JSON به عنوان متن",
    maxSize: "حداکثر سایز به بایت",
    imageHeight: "ارتفاع تصویر",
    imageWidth: "عرض تصویر",
    rowCount: "تعداد سطر",
    addRowText: "متن دکمه درج سطر",
    removeRowText: "متن دکمه حذف سطر",
    minRateDescription: "توضیح حداقل امتیاز",
    maxRateDescription: "توضیح حداکثر امتیاز",
    inputType: "نوع ورودی",
    optionsCaption: "نوشته انتخاب ها",
    defaultValue: "مقدار پیش فرض",

    surveyEditorTitle: "ویرایش نظرسنجی",
    qEditorTitle: "ویرایش سوال: {0}",
    //survey
    showTitle: "نمایش/پنهان کردن عنوان",
    locale: "زبان پیش فرض",
    mode: "حالت (ویرایش/خواندن)",
    clearInvisibleValues: "پاکسازی مقادیر پنهان",
    cookieName: "نام کوکی (به منظور جلوگیری از اجرای دوباره نظرسنجی)",
    sendResultOnPageNext: "ارسال نتایج نظرسنجی در صفحه بعدی",
    storeOthersAsComment: "ذخیره مقدار 'سایر' در فیلد جداگانه",
    showPageTitles: "نمایش عنوان صفحات",
    showPageNumbers: "نمایش شماره صفحات",
    pagePrevText: "متن دکمه صفحه قبلی",
    pageNextText: "متن دکمه صفحه بعدی",
    completeText: "متن دکمه تکمیل نظرسنجی",
    startSurveyText: "متن دکمه شروع نظرسنجی",
    showNavigationButtons: "نمایش دکمه های ناوبری (ناوبری پیش فرض)",
    showPrevButton: "نمایش دکمه قبلی (کاربر ممکن است به صفحه قبل برگردد)",
    firstPageIsStarted: "صفحه اول در نظرسنجی نقطه آغازین آن است.",
    showCompletedPage: "نمایش صفحه اتمام نظرسنجی در پایان (completedHtml)",
    goNextPageAutomatic:
      "با پاسخگویی به تمام سوالات، به صورت اتوماتیک به صفحه بعد برود",
    showProgressBar: "نمایش نشانگر پیشرفت",
    questionTitleLocation: "محل عنوان سوال",
    requiredText: "سوالات نشان دار اجباری هستند",
    questionStartIndex: "نمایه شروع سوالات (۱،۲ یا a و b)",
    showQuestionNumbers: "نمایش شماره های سوالات",
    questionTitleTemplate:
      "قالب عنوان سوال، به صورت پیش فرض: '{no}. {require} {title}'",
    questionErrorLocation: "محل خطای سوال",
    focusFirstQuestionAutomatic: "تمرکز بر روی اولین سوال با تغییر صفحه",
    questionsOrder: "ترتیب المان ها در صفحه",
    maxTimeToFinish: "نهایت زمان برای اتمام نظرسنجی",
    maxTimeToFinishPage: "نهایت زمان برای اتمام این صفحه نظرسنجی",
    showTimerPanel: "نمایش پنل زمان سنج",
    showTimerPanelMode: "نمایش حالت پنل زمان سنج",
    renderMode: "حالت رندر",
    allowAddPanel: "اجازه افزودن پنل",
    allowRemovePanel: "اجازه حذف پنل",
    panelAddText: "متن افزودن پنل",
    panelRemoveText: "متن حذف پنل",
    isSinglePage: "نمایش تمام المان ها در یک صفحه",

    tabs: {
      general: "عمومی",
      fileOptions: "انتخاب ها",
      html: "ویرایشگر HTML",
      columns: "ستون ها",
      rows: "سطرها",
      choices: "انتخاب ها",
      visibleIf: "نمایش در صورت",
      rateValues: "مقادیر رتبه بندی",
      choicesByUrl: "انتخاب ها از وب",
      matrixChoices: "انتخاب های پیشفرض",
      multipleTextItems: "فیلدهای متنی",
      validators: "اعتبارسنجی ها",
      navigation: "ناوبری",
      question: "سوال",
      completedHtml: "HTML صفحه تکمیل نظرسنجی",
      loadingHtml: "HTML بارگزاری",
      timer: "زمان سنج/کوئیز",
      triggers: "اجرا کننده",
      templateTitle: "عنوان قالب"
    },
    editProperty: "ویرایش خصوصیت '{0}'",
    items: "[ آیتم ها: {0} ]",

    enterNewValue: "لطفا یک مقدار وارد کنید",
    noquestions: "سوالی در پرسشنامه درج نشده",
    createtrigger: "اجرا کننده ای بسازید",
    triggerOn: "در ",
    triggerMakePagesVisible: "صفحات را قابل نمایش کن:",
    triggerMakeQuestionsVisible: "سوالات را قابل نمایش کن:",
    triggerCompleteText: "پرسشنامه را تکمیل کن اگر موفق بود.",
    triggerNotSet: "اجرا کننده تنظیم نشده.",
    triggerRunIf: "اجرا در صورت",
    triggerSetToName: "تعییر مقدار از: ",
    triggerSetValue: "به: ",
    triggerIsVariable: "عدم درج متغییر در نتایج پرسشنامه"
  },
  //Property values
  pv: {
    true: "صحیح",
    false: "غلط",
    inherit: "ارث بری",
    show: "آشکار",
    hide: "پنهان",
    default: "پیش فرض",
    initial: "اولیه",
    random: "تصادفی",
    collapsed: "جمع شده",
    expanded: "باز شده",
    none: "هیچ کدام",
    asc: "صعودی",
    desc: "نزولی",
    indeterminate: "نامشخص",
    decimal: "اعشاری",
    currency: "ارز",
    percent: "درصد",
    firstExpanded: "firstExpanded",
    off: "خاموش",
    onPanel: "روی پنل",
    onSurvey: "روی نظرسنجی",
    list: "لیست",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "افقی",
    vertical: "عمودی",
    top: "بالا",
    bottom: "پایین",
    topBottom: "بالا و پایین",
    left: "چپ",
    color: "رنگ",
    date: "تاریخ",
    datetime: "تاریخ و ساعت",
    "datetime-local": "تاریخ و سوال پیش فرض",
    email: "ایمیل",
    month: "ماه",
    number: "عدد",
    password: "رمزعبور",
    range: "دامنه",
    tel: "تلفن",
    text: "متن",
    time: "زمان",
    url: "url",
    week: "هفته",
    hidden: "مخفی",
    on: "روشن",
    onPage: "روی صفحه",
    edit: "ویرایش",
    display: "نمایش",
    onComplete: "به محض تمام شدن",
    onHidden: "به محض مخفی شدن",
    all: "تمام",
    page: "صفحه",
    survey: "نظرسنجی",
    onNextPage: "به محض صفحه بعدی",
    onValueChanged: "به محض تغییر مقدار"
  },
  //Operators
  op: {
    empty: "خالی باشد",
    notempty: "خالی نباشد",
    equal: "مساوی باشد",
    notequal: "مساوی نباشد",
    contains: "شامل",
    notcontains: "شامل نباشد",
    greater: "بزرگتر",
    less: "کوچکتر",
    greaterorequal: "بزرگتر یا مساوی",
    lessorequal: "کوچکتر یا مساوی"
  },
  //Embed window
  ew: {
    angular: "استفاده از نسخه Angular",
    jquery: "استفاده از نسخه jQuery",
    knockout: "استفاده از نسخه ناک اوت",
    react: "استفاده از نسخه React",
    vue: "استفاده از نسخه Vue",
    bootstrap: "برای فریم ورک بوتسترپ",
    standard: "بدون بوتسترپ",
    showOnPage: "نمایش نظرسنجی در یک صفحه",
    showInWindow: "نمایش نظرسنجی در یک پنجره",
    loadFromServer: "بارگزاری JSON از سرور",
    titleScript: "اسکریپت و شیوه نمایش",
    titleHtml: "HTML",
    titleJavaScript: "جاوااسکریپت"
  },
  //Test Survey
  ts: {
    selectPage: "صفحه ای را برای آزمایش انتخاب کنید:",
    showInvisibleElements: "نمایش المان های مخفی"
  },
  validators: {
    answercountvalidator: "تعداد پاسخ",
    emailvalidator: "ایمیل",
    numericvalidator: "عدد",
    regexvalidator: "regex",
    textvalidator: "متن"
  },
  triggers: {
    completetrigger: "تکمیل نظرسنجی",
    setvaluetrigger: "تنظیم مقدار",
    visibletrigger: "تغییر وضعیت دیده شدن"
  },
  //Properties
  p: {
    name: "نام",
    title: { name: "عنوان", title: "اگر خالی باشد مانند نام درج می شود" },
    survey_title: { name: "عنوان", title: "در تمام صفحات دیده می شود" },
    page_title: { name: "عنوان", title: "عنوان صفحه" },
    
    navigationButtonsVisibility: "پدیداری دکمه های ناوبری",
    questionsOrder: "ترتیب سوالات",
    maxTimeToFinish: "حداکثر زمان برای تکمیل",

    visible: "آشکار",
    visibleIf: "آشکار اگر",
    questionTitleLocation: "questionTitleLocation",
    description: "توضیحات",
    state: "وضعیت",
    isRequired: "اجباری؟",
    requiredIf: "اجبار اگر؟",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "صفحه",

    width: "عرض",

    commentText: "متن نظر",
    valueName: "نام مقدار",
    enableIf: "فعال اگر",
    defaultValue: "مقدار پیش فرض",
    correctAnswer: "پاسخ صحیح",
    readOnly: "فقط خوانش",
    validators: "اعتبارسنج ها",
    titleLocation: "titleLocation",

    hasComment: "نظر دارد؟",
    hasOther: "سایر دارد؟",
    choices: "گزینه ها",
    choicesOrder: "ترتیب گزینه ها",
    choicesByUrl: "گزینه ها با لینک",
    otherText: "متن سایر",
    otherErrorText: "متن خطای سایر",
    storeOthersAsComment: "ذخیره سایر به صورت نظر",

    label: "برچسب",
    showTitle: "نامیش عنوان",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "ستون ها",
    rows: "سطر ها",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "فرمت",
    displayStyle: "سبک نمایش",
    currency: "ارز",
    useGrouping: "useGrouping",

    showPreview: "پیش نمایش",
    allowMultiple: "اجازه چند انتخابی",
    imageHeight: "طول عکس",
    imageWidth: "عرض عکس",
    storeDataAsText: "ذخیره داده به صورت متنی",
    maxSize: "نهایت حجم",

    html: "html",

    columns: "ستون ها",
    cells: "سلول ها",
    isAllRowRequired: "آیا تمام سطرها اجباری اند؟",

    horizontalScroll: "اسکرول افقی",
    cellType: "نوع سلول",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "تعداد سطر",
    minRowCount: "حداقل تعداد سطر",
    maxRowCount: "حداکثر تعداد سطر",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "تاییدیه حذف",
    confirmDeleteText: "متن تاییدیه حذف",
    addRowLocation: "addRowLocation",
    addRowText: "افزودن متن سطر",
    removeRowText: "حذف متن سطر",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "حجم",

    locale: "زبان",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "متن",
    minValue: "حداقل مقدار",
    maxValue: "حداکثر مقدار",
    minLength: "حداقل طول",
    maxLength: "حداکثر طول",
    allowDigits: "اجازه عدد",
    minCount: "حداقل تعداد",
    maxCount: "حداکثر تعداد",
    regex: "regular expression"
  }
};

editorLocalization.locales["fa"] = persianStrings;
