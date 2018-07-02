module.exports = {
    themeConfig: {
        // 博客的 logo
        displayAllHeaders: false,
        logo: 'https://cdn.yuque.com/yuque/0/2018/jpeg/92616/1526287107537-assets/web-upload/27f0ab12-d94f-455f-af72-a109565ef2cd.jpeg?x-oss-process=image/resize,w_440',
        // 添加导航栏
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '关于中泽',
                link: '/home/'
            },
            {
                text: 'yao',
                link: '/yao/'
            },
            {
                text: 'js',
                link: '/zhihu/'
            },
            {
                text: 'github',
                items: [{
                        text: 'focus-outside',
                        link: 'https://github.com/TaoXuSheng/focus-outside'
                    },
                    {
                        text: 'stylus-converter',
                        link: 'https://github.com/TaoXuSheng/stylus-converter'
                    }
                ]
            }
        ],
        sidebar: {
            '/home/': [
                {
                    title: '前端',
                    collapsable: false,
                    children: [
                        '/home/',
                        '/home/home',
                    ]
                },
            ],
        }
    }
}
