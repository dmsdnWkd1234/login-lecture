'use strict';

const users = {
    id: ['안녕하세요', '저는', '으노미에요'],
    password: ['1234', '5678', '12345678'],
};

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            succsess: false,
            msg: '로그인에 실패하였습니다.',
        });
    },
};

module.exports = {
    output,
    process,
};
