(function () {
  if (window.location.pathname.slice(-11).toLowerCase() === '/index.html') {
    var cleanPath = window.location.pathname.slice(0, -10) || '/';
    window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
  }

  var sessionKey = 'emeraldLifeSessionLanguage';
  var supportedLanguages = ['en', 'zhHans', 'zhHant'];
  var htmlLang = {
    en: 'en',
    zhHans: 'zh-Hans',
    zhHant: 'zh-Hant'
  };
  var languageLabels = {
    en: 'English',
    zhHans: '简体中文',
    zhHant: '繁體中文'
  };

  var translations = {
    en: {
      common: {
        brand: 'EmeraldLife',
        skip: 'Skip to content',
        homeAria: 'EmeraldLife homepage',
        primaryNav: 'Primary navigation',
        footerNav: 'Footer navigation',
        languageSelector: 'Language selector',
        copyright: '© 2026 EmeraldLife. All rights reserved.'
      },
      nav: {
        home: 'Home',
        product: 'Product',
        privacy: 'Privacy',
        terms: 'Terms',
        support: 'Support',
        soon: 'Coming Soon',
        openMenu: 'Open menu',
        closeMenu: 'Close menu'
      },
      footer: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        health: 'Health Disclaimer',
        support: 'Support'
      },
      pages: {
        homeTitle: 'EmeraldLife | Coming Soon',
        homeDescription: 'EmeraldLife is a pre-launch health and lifestyle app focused on food calories, macro targets, Apple Health movement, wearable recovery signals, and progress context.',
        privacyTitle: 'Privacy Policy | EmeraldLife',
        privacyDescription: 'Privacy Policy for the EmeraldLife website and future app-related services.',
        termsTitle: 'Terms of Use | EmeraldLife',
        termsDescription: 'Plain-language Terms of Use for the EmeraldLife website.',
        healthTitle: 'Health Disclaimer | EmeraldLife',
        healthDescription: 'Health disclaimer for EmeraldLife general wellness and lifestyle support.',
        supportTitle: 'Support | EmeraldLife',
        supportDescription: 'Official support and contact information for EmeraldLife.',
        notFoundTitle: 'Page not found | EmeraldLife',
        notFoundDescription: 'Page not found on the EmeraldLife website.'
      },
      home: {
        eyebrow: 'EmeraldLife',
        heroTitle: 'Your calm command center for nutrition and recovery.',
        heroLead: 'Log meals instantly with Smart Scan, track your macros, and sync Apple Health recovery data—all in one quiet, focused daily view.',
        heroPrimary: 'Coming Soon on the App Store',
        heroSecondary: 'Contact support',
        visualPanelLeft: 'Apple Health',
        visualHealth: 'Movement, wearable, and scale signals',
        visualPanelScan: 'Smart Scan',
        visualScanCopy: 'Camera-first meal logging',
        visualPanelRight: 'Personal baseline',
        visualRecovery: 'Sleep, HRV, resting HR',
        visualPanelMacros: 'Macro targets',
        visualMacrosCopy: 'Protein, carbs, and fat in context',
        screenshotAlt: 'EmeraldLife Today view showing readiness score, sleep, recovery, activity load, and daily nutrition',
        visualCaption: 'Actual app interface. Pre-release preview.',
        statusLabel: 'Current status',
        statusText: 'EmeraldLife is currently in development and is not yet publicly released for the App Store.',
        disclaimerLabel: 'General wellness focus',
        disclaimerText: 'EmeraldLife is designed for general wellness and lifestyle support. It does not provide medical advice, diagnosis, or treatment.',
        productTitle: 'A calmer command center for daily health context.',
        productCopy: 'EmeraldLife is being built around a Today view that connects food calories, macro targets, Apple Health movement, wearable recovery signals, and profile-based goals without turning wellness into noise.',
        featuresLabel: 'Features',
        featuresTitle: 'Modeled on the actual app experience.',
        featureRoutineTitle: 'Today view',
        featureRoutineCopy: 'Review food, recovery, calories, and macros from one focused daily surface.',
        featureNutritionTitle: 'Smart Scan',
        featureNutritionCopy: 'Log meals with a camera-first flow and keep nutrition context connected to your daily targets.',
        featureHabitTitle: 'Macro targets',
        featureHabitCopy: 'Keep protein, carbs, and fat visible with profile-based targets and clear daily context.',
        featureRecoveryTitle: 'Readiness and HRV',
        featureRecoveryCopy: 'Review sleep, resting heart rate, and HRV against your personal baseline when supported wearable data is available.',
        featureReflectionTitle: 'Fitness load',
        featureReflectionCopy: 'Connect movement, steps, active energy, and workouts into a practical training context.',
        featureInsightTitle: 'Profile settings',
        featureInsightCopy: 'Shape calorie estimates, macro split, reminders, units, and health access preferences.',
        privacyLabel: 'Privacy',
        privacyTitle: 'Designed with clear data practices in mind.',
        privacyCopy: 'EmeraldLife is being built with a focus on clear communication, user control, and respectful product design.',
        privacyLink: 'Read the Privacy Policy',
        healthLabel: 'Health disclaimer',
        healthTitle: 'General wellness, not medical care.',
        healthCopy: 'EmeraldLife is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease. Always seek the advice of a qualified healthcare professional with questions about your health.',
        healthLink: 'Read the Health Disclaimer',
        contactLabel: 'Contact',
        contactTitle: 'EmeraldLife is currently in development.',
        contactSupport: 'For support or product questions, contact <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>.',
        contactGeneral: 'For general, privacy, legal, or business questions, contact <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>.'
      },
      privacy: {
        title: 'Privacy Policy',
        effective: '<strong>Effective date:</strong> June 9, 2026',
        intro: 'EmeraldLife is currently in development. This Privacy Policy explains how EmeraldLife handles information through this website and future app-related services.',
        s1Title: '1. Overview',
        s1Copy: 'This policy applies to the public EmeraldLife website and future EmeraldLife services that reference this policy. The policy may be updated before the public app launch.',
        s2Title: '2. Information we may collect',
        s2Copy: 'We may receive information you choose to share with us, such as email messages. This website may also collect basic technical information through normal hosting logs, such as browser type, requested pages, approximate time of access, and device or network information commonly recorded by hosting providers.',
        s3Title: '3. How information may be used',
        s3Copy: 'Information may be used to respond to inquiries, maintain website reliability, understand product interest, improve user experience, and support responsible product development.',
        s4Title: '4. Health and wellness information',
        s4Copy: 'EmeraldLife is intended for general wellness and lifestyle support. Future app-related services may involve wellness, nutrition, habit, and recovery-related information, but EmeraldLife is not designed to provide medical care or clinical services.',
        s5Title: '5. Data sharing',
        s5Copy: 'We do not sell personal information. Information may be shared when reasonably necessary to operate the website, respond to user requests, comply with legal obligations, protect rights and safety, or work with service providers that support website or future app operations.',
        s6Title: '6. Data security',
        s6Copy: 'We use reasonable safeguards appropriate for a pre-launch website and evolving app services. No method of transmission or storage is guaranteed to be completely secure.',
        s7Title: '7. Children’s privacy',
        s7Copy: 'EmeraldLife is not directed to children under 13. If you believe a child has provided personal information, contact us so we can review and address the request.',
        s8Title: '8. International users',
        s8Copy: 'If you access this website from outside your home jurisdiction, information may be processed in locations where privacy laws differ from those in your jurisdiction.',
        s9Title: '9. Changes to this policy',
        s9Copy: 'We may update this policy as EmeraldLife moves toward public launch. Updated versions will be posted on this page with a revised effective date when appropriate.',
        s10Title: '10. Contact us',
        s10Copy: 'For privacy questions, contact <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>.'
      },
      terms: {
        title: 'Terms of Use',
        effective: '<strong>Effective date:</strong> June 9, 2026',
        intro: 'EmeraldLife is currently under development. These Terms of Use apply to your use of this website and future services that link to these terms.',
        s1Title: '1. Acceptance of terms',
        s1Copy: 'By using this website, you agree to these terms. If you do not agree, please do not use the site.',
        s2Title: '2. Website and app status',
        s2Copy: 'EmeraldLife is currently under development. Content on this website is provided for general informational purposes and may change as development continues.',
        s3Title: '3. General wellness purpose',
        s3Copy: 'EmeraldLife is intended to support general wellness, lifestyle reflection, nutrition awareness, recovery awareness, and habit-building.',
        s4Title: '4. No medical advice',
        s4Copy: 'EmeraldLife does not provide medical advice, diagnosis, treatment, cure, prevention of disease, clinical guidance, or emergency services.',
        s5Title: '5. User responsibilities',
        s5Copy: 'You agree to use this website lawfully and not attempt to interfere with its operation, security, or availability.',
        s6Title: '6. Intellectual property',
        s6Copy: 'Website content, branding, design, and related materials belong to EmeraldLife or are used with permission, unless otherwise stated.',
        s7Title: '7. No warranties',
        s7Copy: 'This website is provided as is and as available, without warranties of any kind to the extent permitted by law.',
        s8Title: '8. Limitation of liability',
        s8Copy: 'To the extent permitted by law, EmeraldLife is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of this website.',
        s9Title: '9. Changes to these terms',
        s9Copy: 'We may update these terms from time to time. Updated terms will be posted on this page with a revised effective date when appropriate.',
        s10Title: '10. Contact',
        s10Copy: 'For legal, privacy, or general questions, contact <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>.'
      },
      health: {
        title: 'Health Disclaimer',
        intro: 'EmeraldLife is for general wellness, lifestyle reflection, nutrition awareness, recovery awareness, and habit support.',
        p1: 'EmeraldLife is not a medical device.',
        p2: 'EmeraldLife does not provide medical advice, diagnosis, treatment, cure, or prevention of disease.',
        p3: 'Users should consult qualified healthcare professionals with medical questions.',
        p4: 'Users should not disregard professional medical advice because of information from EmeraldLife.',
        emergency: 'If you think you may have a medical emergency, contact local emergency services immediately.',
        contact: 'For support questions, contact <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>.'
      },
      support: {
        title: 'Need help?',
        supportEmail: 'Support email: <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>',
        generalEmail: 'General, privacy, legal, and business contact: <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>',
        status: 'EmeraldLife is currently in development and not yet publicly released for the App Store.',
        faqTitle: 'FAQ',
        q1: 'Is EmeraldLife available now?',
        a1: 'Not yet. EmeraldLife is currently in development.',
        q2: 'Is EmeraldLife a medical app?',
        a2: 'No. EmeraldLife is intended for general wellness and lifestyle support. It does not provide medical advice, diagnosis, or treatment.',
        q3: 'How can I contact support?',
        a3: 'You can email <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>.',
        q4: 'How can I contact the team for privacy, legal, or general questions?',
        a4: 'You can email <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>.',
        q5: 'Where can I read the privacy policy?',
        a5: 'Read the <a href="privacy.html">Privacy Policy</a>.'
      },
      notFound: {
        title: 'Page not found',
        copy: 'The page you are looking for may have moved or does not exist.',
        link: 'Back to homepage'
      }
    },
    zhHans: {
      common: {
        brand: 'EmeraldLife',
        skip: '跳到主要内容',
        homeAria: 'EmeraldLife 首页',
        primaryNav: '主导航',
        footerNav: '页脚导航',
        languageSelector: '语言选择',
        copyright: '© 2026 EmeraldLife。保留所有权利。'
      },
      nav: {
        home: '首页',
        product: '产品',
        privacy: '隐私',
        terms: '条款',
        support: '支持',
        soon: '即将推出',
        openMenu: '打开菜单',
        closeMenu: '关闭菜单'
      },
      footer: {
        privacy: '隐私政策',
        terms: '使用条款',
        health: '健康声明',
        support: '支持'
      },
      pages: {
        homeTitle: 'EmeraldLife | 即将推出',
        homeDescription: 'EmeraldLife 是一款尚未发布的健康与生活方式应用，关注食物热量、宏量营养目标、Apple Health 运动、穿戴恢复信号和进展语境。',
        privacyTitle: '隐私政策 | EmeraldLife',
        privacyDescription: 'EmeraldLife 网站及未来应用相关服务的隐私政策。',
        termsTitle: '使用条款 | EmeraldLife',
        termsDescription: 'EmeraldLife 网站的简明使用条款。',
        healthTitle: '健康免责声明 | EmeraldLife',
        healthDescription: 'EmeraldLife 一般健康与生活方式支持的健康免责声明。',
        supportTitle: '支持 | EmeraldLife',
        supportDescription: 'EmeraldLife 官方支持与联系信息。',
        notFoundTitle: '页面未找到 | EmeraldLife',
        notFoundDescription: 'EmeraldLife 网站页面未找到。'
      },
      home: {
        eyebrow: 'EmeraldLife',
        heroTitle: '一眼看清今日健康',
        heroLead: '拍照记餐，追踪营养，同步 Apple Health 恢复数据。今天吃得怎样、身体是否恢复到位，打开即可看见。',
        heroPrimary: 'App Store 即将上线',
        heroSecondary: '联系支持',
        visualPanelLeft: 'Apple Health',
        visualHealth: '运动、穿戴与体重秤信号',
        visualPanelScan: 'Smart Scan',
        visualScanCopy: '相机优先的餐食记录',
        visualPanelRight: '个人基线',
        visualRecovery: '睡眠、HRV、静息心率',
        visualPanelMacros: '宏量营养目标',
        visualMacrosCopy: '蛋白质、碳水与脂肪一目了然',
        screenshotAlt: 'EmeraldLife 今日视图，展示恢复状态评分、睡眠、恢复、活动负荷与每日营养',
        visualCaption: '真实应用界面，预发布预览',
        statusLabel: '当前状态',
        statusText: 'EmeraldLife 仍在开发中，尚未在 App Store 公开发布。',
        disclaimerLabel: '健康与生活支持',
        disclaimerText: 'EmeraldLife 用于一般健康与生活支持，不提供医疗建议、诊断或治疗。',
        productTitle: '信息更少，判断更清楚',
        productCopy: '热量、营养目标、Apple Health 运动、穿戴恢复信号与个人目标，都收进 Today 视图。不乱堆数据，只呈现你今天需要知道的事。',
        featuresLabel: '核心功能',
        featuresTitle: '来自真实产品的核心能力',
        featureRoutineTitle: '今日视图',
        featureRoutineCopy: '在一个界面里查看饮食、恢复、热量与宏量营养。',
        featureNutritionTitle: 'Smart Scan',
        featureNutritionCopy: '相机优先记录餐食，让营养摄入与每日目标始终对齐。',
        featureHabitTitle: '宏量营养',
        featureHabitCopy: '按个人资料设定蛋白质、碳水与脂肪目标，摄入进度一目了然。',
        featureRecoveryTitle: '恢复与 HRV',
        featureRecoveryCopy: '结合穿戴设备，对照个人基线查看睡眠、静息心率与 HRV。',
        featureReflectionTitle: '训练负荷',
        featureReflectionCopy: '把步数、活动能量与训练记录转化为可参考的负荷信息。',
        featureInsightTitle: '个人设置',
        featureInsightCopy: '调整热量估算、营养比例、提醒、单位与健康数据授权。',
        privacyLabel: '隐私',
        privacyTitle: '数据透明，尊重用户',
        privacyCopy: 'EmeraldLife 注重清晰沟通、用户掌控与尊重隐私的产品设计。',
        privacyLink: '阅读隐私政策',
        healthLabel: '健康声明',
        healthTitle: '健康支持，非医疗用途',
        healthCopy: 'EmeraldLife 不是医疗器械，不用于诊断、治疗、治愈或预防疾病。健康问题请咨询专业医疗人员。',
        healthLink: '阅读健康声明',
        contactLabel: '联系我们',
        contactTitle: 'EmeraldLife 仍在开发中',
        contactSupport: '产品与支持：<a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>',
        contactGeneral: '隐私、法律与商务：<a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>'
      },
      privacy: {
        title: '隐私政策',
        effective: '<strong>生效日期：</strong>2026 年 6 月 9 日',
        intro: 'EmeraldLife 目前正在开发中。本隐私政策说明 EmeraldLife 如何通过本网站及未来应用相关服务处理信息。',
        s1Title: '1. 概述',
        s1Copy: '本政策适用于 EmeraldLife 公开网站，以及未来引用本政策的 EmeraldLife 服务。本政策可能会在应用公开发布前更新。',
        s2Title: '2. 我们可能收集的信息',
        s2Copy: '我们可能会收到你主动提供的信息，例如电子邮件内容。本网站也可能通过正常托管日志收集基本技术信息，例如浏览器类型、请求页面、访问的大致时间，以及托管服务通常记录的设备或网络信息。',
        s3Title: '3. 信息的使用方式',
        s3Copy: '信息可能用于回复咨询、维护网站可靠性、了解产品兴趣、改善用户体验，以及支持负责任的产品开发。',
        s4Title: '4. 健康与生活方式信息',
        s4Copy: 'EmeraldLife 旨在提供一般健康与生活方式支持。未来应用相关服务可能涉及健康、营养、习惯和恢复相关信息，但 EmeraldLife 并非用于提供医疗护理或临床服务。',
        s5Title: '5. 数据共享',
        s5Copy: '我们不会出售个人信息。在合理需要时，信息可能用于网站运营、回复用户请求、遵守法律义务、保护权利与安全，或与支持网站及未来应用运营的服务提供方合作。',
        s6Title: '6. 数据安全',
        s6Copy: '我们会采用适合预发布网站及发展中应用服务的合理保护措施。任何传输或存储方式都无法保证完全安全。',
        s7Title: '7. 儿童隐私',
        s7Copy: 'EmeraldLife 并非面向 13 岁以下儿童。如果你认为儿童提供了个人信息，请联系我们，以便我们审查并处理该请求。',
        s8Title: '8. 国际用户',
        s8Copy: '如果你从所在地司法辖区以外访问本网站，信息可能会在隐私法律与你所在地不同的地区处理。',
        s9Title: '9. 本政策的变更',
        s9Copy: '随着 EmeraldLife 推进公开发布，我们可能会更新本政策。更新版本将在本页面发布，并在适当时修订生效日期。',
        s10Title: '10. 联系我们',
        s10Copy: '如有隐私问题，请联系 <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>。'
      },
      terms: {
        title: '使用条款',
        effective: '<strong>生效日期：</strong>2026 年 6 月 9 日',
        intro: 'EmeraldLife 目前正在开发中。本使用条款适用于你使用本网站以及未来链接到本条款的服务。',
        s1Title: '1. 接受条款',
        s1Copy: '使用本网站即表示你同意本条款。如果你不同意，请不要使用本网站。',
        s2Title: '2. 网站和应用状态',
        s2Copy: 'EmeraldLife 目前正在开发中。本网站内容仅供一般信息参考，并可能随着开发进展而变化。',
        s3Title: '3. 一般健康目的',
        s3Copy: 'EmeraldLife 旨在支持一般健康、生活方式反思、营养意识、恢复意识和习惯建立。',
        s4Title: '4. 非医疗建议',
        s4Copy: 'EmeraldLife 不提供医疗建议、诊断、治疗、疾病治愈或预防、临床指导或急救服务。',
        s5Title: '5. 用户责任',
        s5Copy: '你同意合法使用本网站，并且不试图干扰其运行、安全或可用性。',
        s6Title: '6. 知识产权',
        s6Copy: '除非另有说明，网站内容、品牌、设计和相关材料属于 EmeraldLife 或经许可使用。',
        s7Title: '7. 不作保证',
        s7Copy: '在法律允许范围内，本网站按现状和可用状态提供，不作任何形式的保证。',
        s8Title: '8. 责任限制',
        s8Copy: '在法律允许范围内，EmeraldLife 不对因使用本网站而产生的间接、附带、特殊、后果性或惩罚性损害承担责任。',
        s9Title: '9. 条款变更',
        s9Copy: '我们可能不时更新本条款。更新后的条款将在本页面发布，并在适当时修订生效日期。',
        s10Title: '10. 联系',
        s10Copy: '如有法律、隐私或一般问题，请联系 <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>。'
      },
      health: {
        title: '健康免责声明',
        intro: 'EmeraldLife 用于一般健康、生活方式反思、营养意识、恢复意识和习惯支持。',
        p1: 'EmeraldLife 不是医疗器械。',
        p2: 'EmeraldLife 不提供医疗建议、诊断、治疗、疾病治愈或预防。',
        p3: '如有医疗问题，用户应咨询合格的医疗专业人士。',
        p4: '用户不应因为 EmeraldLife 提供的信息而忽视专业医疗建议。',
        emergency: '如果你认为自己可能出现医疗紧急情况，请立即联系当地紧急服务。',
        contact: '如有支持问题，请联系 <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>。'
      },
      support: {
        title: '需要帮助？',
        supportEmail: '支持：<a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>',
        generalEmail: '隐私、法律与商务：<a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>',
        status: 'EmeraldLife 目前正在开发中，尚未面向 App Store 公开发布。',
        faqTitle: '常见问题',
        q1: 'EmeraldLife 现在可以使用吗？',
        a1: '还不可以。EmeraldLife 目前正在开发中。',
        q2: 'EmeraldLife 是医疗应用吗？',
        a2: '不是。EmeraldLife 面向一般健康与生活方式支持，不提供医疗建议、诊断或治疗。',
        q3: '如何联系支持？',
        a3: '你可以发送邮件至 <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>。',
        q4: '如何就隐私、法律或一般问题联系团队？',
        a4: '你可以发送邮件至 <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>。',
        q5: '在哪里可以阅读隐私政策？',
        a5: '阅读<a href="privacy.html">隐私政策</a>。'
      },
      notFound: {
        title: '页面未找到',
        copy: '你正在查找的页面可能已移动或不存在。',
        link: '返回首页'
      }
    },
    zhHant: {
      common: {
        brand: 'EmeraldLife',
        skip: '跳到主要內容',
        homeAria: 'EmeraldLife 首頁',
        primaryNav: '主導覽',
        footerNav: '頁尾導覽',
        languageSelector: '語言選擇',
        copyright: '© 2026 EmeraldLife。保留所有權利。'
      },
      nav: {
        home: '首頁',
        product: '產品',
        privacy: '隱私',
        terms: '條款',
        support: '支援',
        soon: '即將推出',
        openMenu: '開啟選單',
        closeMenu: '關閉選單'
      },
      footer: {
        privacy: '隱私政策',
        terms: '使用條款',
        health: '健康聲明',
        support: '支援'
      },
      pages: {
        homeTitle: 'EmeraldLife | 即將推出',
        homeDescription: 'EmeraldLife 是一款尚未發布的健康與生活方式應用，關注食物熱量、宏量營養目標、Apple Health 運動、穿戴恢復信號和進展語境。',
        privacyTitle: '隱私政策 | EmeraldLife',
        privacyDescription: 'EmeraldLife 網站及未來應用相關服務的隱私政策。',
        termsTitle: '使用條款 | EmeraldLife',
        termsDescription: 'EmeraldLife 網站的簡明使用條款。',
        healthTitle: '健康免責聲明 | EmeraldLife',
        healthDescription: 'EmeraldLife 一般健康與生活方式支援的健康免責聲明。',
        supportTitle: '支援 | EmeraldLife',
        supportDescription: 'EmeraldLife 官方支援與聯絡資訊。',
        notFoundTitle: '頁面未找到 | EmeraldLife',
        notFoundDescription: 'EmeraldLife 網站頁面未找到。'
      },
      home: {
        eyebrow: 'EmeraldLife',
        heroTitle: '一眼看清今日健康',
        heroLead: '拍照記餐，追蹤營養，同步 Apple Health 恢復資料。今天吃得怎樣、身體是否恢復到位，打開即可看見。',
        heroPrimary: 'App Store 即將上線',
        heroSecondary: '聯絡支援',
        visualPanelLeft: 'Apple Health',
        visualHealth: '運動、穿戴與體重秤信號',
        visualPanelScan: 'Smart Scan',
        visualScanCopy: '相機優先的餐食記錄',
        visualPanelRight: '個人基線',
        visualRecovery: '睡眠、HRV、靜息心率',
        visualPanelMacros: '宏量營養目標',
        visualMacrosCopy: '蛋白質、碳水與脂肪一目了然',
        screenshotAlt: 'EmeraldLife 今日視圖，展示恢復狀態評分、睡眠、恢復、活動負荷與每日營養',
        visualCaption: '真實應用介面，預發布預覽',
        statusLabel: '目前狀態',
        statusText: 'EmeraldLife 仍在開發中，尚未在 App Store 公開發布。',
        disclaimerLabel: '健康與生活支援',
        disclaimerText: 'EmeraldLife 用於一般健康與生活支援，不提供醫療建議、診斷或治療。',
        productTitle: '資訊更少，判斷更清楚',
        productCopy: '熱量、營養目標、Apple Health 運動、穿戴恢復信號與個人目標，都收進 Today 視圖。不亂堆資料，只呈現你今天需要知道的事。',
        featuresLabel: '核心功能',
        featuresTitle: '來自真實產品的核心能力',
        featureRoutineTitle: '今日視圖',
        featureRoutineCopy: '在一個介面裡查看飲食、恢復、熱量與宏量營養。',
        featureNutritionTitle: 'Smart Scan',
        featureNutritionCopy: '相機優先記錄餐食，讓營養攝入與每日目標始終對齊。',
        featureHabitTitle: '宏量營養',
        featureHabitCopy: '依個人資料設定蛋白質、碳水與脂肪目標，攝入進度一目了然。',
        featureRecoveryTitle: '恢復與 HRV',
        featureRecoveryCopy: '結合穿戴裝置，對照個人基線查看睡眠、靜息心率與 HRV。',
        featureReflectionTitle: '訓練負荷',
        featureReflectionCopy: '把步數、活動能量與訓練記錄轉化為可參考的負荷資訊。',
        featureInsightTitle: '個人設定',
        featureInsightCopy: '調整熱量估算、營養比例、提醒、單位與健康資料授權。',
        privacyLabel: '隱私',
        privacyTitle: '資料透明，尊重用戶',
        privacyCopy: 'EmeraldLife 注重清晰溝通、用戶掌控與尊重隱私的產品設計。',
        privacyLink: '閱讀隱私政策',
        healthLabel: '健康聲明',
        healthTitle: '健康支援，非醫療用途',
        healthCopy: 'EmeraldLife 不是醫療器械，不用於診斷、治療、治癒或預防疾病。健康問題請諮詢專業醫療人員。',
        healthLink: '閱讀健康聲明',
        contactLabel: '聯絡我們',
        contactTitle: 'EmeraldLife 仍在開發中',
        contactSupport: '產品與支援：<a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>',
        contactGeneral: '隱私、法律與商務：<a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>'
      },
      privacy: {
        title: '隱私政策',
        effective: '<strong>生效日期：</strong>2026 年 6 月 9 日',
        intro: 'EmeraldLife 目前正在開發中。本隱私政策說明 EmeraldLife 如何透過本網站及未來應用相關服務處理資訊。',
        s1Title: '1. 概述',
        s1Copy: '本政策適用於 EmeraldLife 公開網站，以及未來引用本政策的 EmeraldLife 服務。本政策可能會在應用公開發布前更新。',
        s2Title: '2. 我們可能收集的資訊',
        s2Copy: '我們可能會收到你主動提供的資訊，例如電子郵件內容。本網站也可能透過正常託管日誌收集基本技術資訊，例如瀏覽器類型、請求頁面、訪問的大致時間，以及託管服務通常記錄的裝置或網路資訊。',
        s3Title: '3. 資訊的使用方式',
        s3Copy: '資訊可能用於回覆查詢、維護網站可靠性、了解產品興趣、改善用戶體驗，以及支援負責任的產品開發。',
        s4Title: '4. 健康與生活方式資訊',
        s4Copy: 'EmeraldLife 旨在提供一般健康與生活方式支援。未來應用相關服務可能涉及健康、營養、習慣和恢復相關資訊，但 EmeraldLife 並非用於提供醫療護理或臨床服務。',
        s5Title: '5. 資料共享',
        s5Copy: '我們不會出售個人資訊。在合理需要時，資訊可能用於網站營運、回覆用戶請求、遵守法律義務、保護權利與安全，或與支援網站及未來應用營運的服務提供方合作。',
        s6Title: '6. 資料安全',
        s6Copy: '我們會採用適合預發布網站及發展中應用服務的合理保護措施。任何傳輸或儲存方式都無法保證完全安全。',
        s7Title: '7. 兒童隱私',
        s7Copy: 'EmeraldLife 並非面向 13 歲以下兒童。如果你認為兒童提供了個人資訊，請聯絡我們，以便我們審查並處理該請求。',
        s8Title: '8. 國際用戶',
        s8Copy: '如果你從所在地司法轄區以外訪問本網站，資訊可能會在隱私法律與你所在地不同的地區處理。',
        s9Title: '9. 本政策的變更',
        s9Copy: '隨著 EmeraldLife 推進公開發布，我們可能會更新本政策。更新版本將在本頁面發布，並在適當時修訂生效日期。',
        s10Title: '10. 聯絡我們',
        s10Copy: '如有隱私問題，請聯絡 <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>。'
      },
      terms: {
        title: '使用條款',
        effective: '<strong>生效日期：</strong>2026 年 6 月 9 日',
        intro: 'EmeraldLife 目前正在開發中。本使用條款適用於你使用本網站以及未來連結到本條款的服務。',
        s1Title: '1. 接受條款',
        s1Copy: '使用本網站即表示你同意本條款。如果你不同意，請不要使用本網站。',
        s2Title: '2. 網站和應用狀態',
        s2Copy: 'EmeraldLife 目前正在開發中。本網站內容僅供一般資訊參考，並可能隨著開發進展而變化。',
        s3Title: '3. 一般健康目的',
        s3Copy: 'EmeraldLife 旨在支援一般健康、生活方式反思、營養意識、恢復意識和習慣建立。',
        s4Title: '4. 非醫療建議',
        s4Copy: 'EmeraldLife 不提供醫療建議、診斷、治療、疾病治癒或預防、臨床指導或急救服務。',
        s5Title: '5. 用戶責任',
        s5Copy: '你同意合法使用本網站，並且不試圖干擾其運行、安全或可用性。',
        s6Title: '6. 知識產權',
        s6Copy: '除非另有說明，網站內容、品牌、設計和相關材料屬於 EmeraldLife 或經許可使用。',
        s7Title: '7. 不作保證',
        s7Copy: '在法律允許範圍內，本網站按現狀和可用狀態提供，不作任何形式的保證。',
        s8Title: '8. 責任限制',
        s8Copy: '在法律允許範圍內，EmeraldLife 不對因使用本網站而產生的間接、附帶、特殊、後果性或懲罰性損害承擔責任。',
        s9Title: '9. 條款變更',
        s9Copy: '我們可能不時更新本條款。更新後的條款將在本頁面發布，並在適當時修訂生效日期。',
        s10Title: '10. 聯絡',
        s10Copy: '如有法律、隱私或一般問題，請聯絡 <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>。'
      },
      health: {
        title: '健康免責聲明',
        intro: 'EmeraldLife 用於一般健康、生活方式反思、營養意識、恢復意識和習慣支援。',
        p1: 'EmeraldLife 不是醫療器械。',
        p2: 'EmeraldLife 不提供醫療建議、診斷、治療、疾病治癒或預防。',
        p3: '如有醫療問題，用戶應諮詢合格的醫療專業人士。',
        p4: '用戶不應因為 EmeraldLife 提供的資訊而忽視專業醫療建議。',
        emergency: '如果你認為自己可能出現醫療緊急情況，請立即聯絡當地緊急服務。',
        contact: '如有支援問題，請聯絡 <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>。'
      },
      support: {
        title: '需要幫助？',
        supportEmail: '支援：<a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>',
        generalEmail: '隱私、法律與商務：<a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>',
        status: 'EmeraldLife 目前正在開發中，尚未面向 App Store 公開發布。',
        faqTitle: '常見問題',
        q1: 'EmeraldLife 現在可以使用嗎？',
        a1: '還不可以。EmeraldLife 目前正在開發中。',
        q2: 'EmeraldLife 是醫療應用嗎？',
        a2: '不是。EmeraldLife 面向一般健康與生活方式支援，不提供醫療建議、診斷或治療。',
        q3: '如何聯絡支援？',
        a3: '你可以傳送郵件至 <a href="mailto:support@myemeraldliving.com">support@myemeraldliving.com</a>。',
        q4: '如何就隱私、法律或一般問題聯絡團隊？',
        a4: '你可以傳送郵件至 <a href="mailto:contact@myemeraldliving.com">contact@myemeraldliving.com</a>。',
        q5: '在哪裡可以閱讀隱私政策？',
        a5: '閱讀<a href="privacy.html">隱私政策</a>。'
      },
      notFound: {
        title: '頁面未找到',
        copy: '你正在查找的頁面可能已移動或不存在。',
        link: '返回首頁'
      }
    }
  };

  function getNestedValue(source, path) {
    return path.split('.').reduce(function (value, key) {
      return value && value[key];
    }, source);
  }

  function normalizeLanguage(value) {
    if (supportedLanguages.indexOf(value) !== -1) {
      return value;
    }

    var language = String(value || '').toLowerCase();
    if (language.indexOf('zh-hant') === 0 || language.indexOf('zh-tw') === 0 || language.indexOf('zh-hk') === 0 || language.indexOf('zh-mo') === 0) {
      return 'zhHant';
    }
    if (language.indexOf('zh-hans') === 0 || language.indexOf('zh-cn') === 0 || language.indexOf('zh-sg') === 0 || language === 'zh') {
      return 'zhHans';
    }
    return 'en';
  }

  function browserLanguage() {
    var language = '';
    if (navigator.languages && navigator.languages.length) {
      language = navigator.languages[0];
    }
    if (!language) {
      language = navigator.language || navigator.userLanguage || '';
    }
    return normalizeLanguage(language);
  }

  function detectLanguage() {
    try {
      return normalizeLanguage(sessionStorage.getItem(sessionKey) || browserLanguage());
    } catch (error) {
      return browserLanguage();
    }
  }

  function setText(selector, attribute, language) {
    document.querySelectorAll(selector).forEach(function (node) {
      var key = node.getAttribute(attribute);
      var value = getNestedValue(translations[language], key) || getNestedValue(translations.en, key);
      if (typeof value !== 'string') {
        return;
      }
      if (attribute === 'data-i18n-html') {
        node.innerHTML = value;
      } else if (attribute.indexOf('aria-label') !== -1) {
        node.setAttribute('aria-label', value);
      } else {
        node.textContent = value;
      }
    });
  }

  function closeMenu() {
    var nav = document.querySelector('[data-primary-nav]');
    var toggle = document.querySelector('[data-nav-toggle]');
    if (!nav || !toggle) {
      return;
    }
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', getNestedValue(translations[currentLanguage], 'nav.openMenu'));
  }

  function closeLanguageDropdowns() {
    document.querySelectorAll('[data-language-dropdown]').forEach(function (dropdown) {
      var trigger = dropdown.querySelector('[data-language-trigger]');
      var menu = dropdown.querySelector('[data-language-menu]');
      dropdown.classList.remove('is-open');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
      if (menu) {
        menu.hidden = true;
      }
    });
  }

  function updateLanguageDropdownState(language) {
    document.querySelectorAll('[data-language-current]').forEach(function (node) {
      node.textContent = languageLabels[language] || languageLabels.en;
    });

    document.querySelectorAll('[data-language-option]').forEach(function (option) {
      var isSelected = option.getAttribute('data-language-option') === language;
      option.setAttribute('aria-selected', String(isSelected));
    });
  }

  var screenshotSources = {
    en: 'assets/app-today-en.png',
    zhHans: 'assets/app-today-zh-hans.png',
    zhHant: 'assets/app-today-zh-hant.png'
  };

  function updateAppScreenshots(language) {
    document.querySelectorAll('[data-app-screenshot]').forEach(function (img) {
      var source = screenshotSources[language] || screenshotSources.en;
      if (img.getAttribute('src') !== source) {
        img.setAttribute('src', source);
      }
      var altKey = img.getAttribute('data-i18n-alt');
      if (altKey) {
        var altValue = getNestedValue(translations[language], altKey) || getNestedValue(translations.en, altKey);
        if (typeof altValue === 'string') {
          img.setAttribute('alt', altValue);
        }
      }
    });
  }

  function applyLanguage(language, rememberSelection) {
    currentLanguage = normalizeLanguage(language);
    var page = document.body.getAttribute('data-page') || 'home';
    var pageTitleKey = page + 'Title';
    var pageDescriptionKey = page + 'Description';
    var pageData = translations[currentLanguage].pages;
    var fallbackPageData = translations.en.pages;
    var metaDescription = document.querySelector('meta[name="description"]');

    document.documentElement.lang = htmlLang[currentLanguage];
    document.documentElement.setAttribute('data-lang', currentLanguage);
    document.body.setAttribute('lang', htmlLang[currentLanguage]);
    document.title = pageData[pageTitleKey] || fallbackPageData[pageTitleKey] || fallbackPageData.homeTitle;
    if (metaDescription) {
      metaDescription.setAttribute('content', pageData[pageDescriptionKey] || fallbackPageData[pageDescriptionKey] || fallbackPageData.homeDescription);
    }

    setText('[data-i18n]', 'data-i18n', currentLanguage);
    setText('[data-i18n-html]', 'data-i18n-html', currentLanguage);
    setText('[data-i18n-aria-label]', 'data-i18n-aria-label', currentLanguage);
    updateLanguageDropdownState(currentLanguage);
    updateAppScreenshots(currentLanguage);

    if (rememberSelection) {
      try {
        sessionStorage.setItem(sessionKey, currentLanguage);
      } catch (error) {
      }
    }
  }

  var currentLanguage = detectLanguage();
  var nav = document.querySelector('[data-primary-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', getNestedValue(translations[currentLanguage], isOpen ? 'nav.closeMenu' : 'nav.openMenu'));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        closeMenu();
      }
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
        closeLanguageDropdowns();
      }
    });
  }

  document.querySelectorAll('[data-language-dropdown]').forEach(function (dropdown) {
    var trigger = dropdown.querySelector('[data-language-trigger]');
    var menu = dropdown.querySelector('[data-language-menu]');

    if (!trigger || !menu) {
      return;
    }

    trigger.addEventListener('click', function () {
      var willOpen = menu.hidden;
      closeLanguageDropdowns();
      if (willOpen) {
        dropdown.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
      }
    });

    menu.querySelectorAll('[data-language-option]').forEach(function (option) {
      option.addEventListener('click', function () {
        applyLanguage(option.getAttribute('data-language-option'), true);
        closeLanguageDropdowns();
        closeMenu();
      });
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-language-dropdown]')) {
      closeLanguageDropdowns();
    }
  });

  applyLanguage(currentLanguage, false);
})();
