import mockJS from 'mockjs'

const userList = mockJS.mock({
    success: true,
    "data|100": [
        {
            "id|+1": 0,
            name: '@cname'
        }
    ]
})

module.exports = [
    {
        method: 'post',
        url: '/list',
        response: () => {
            return {
                userList
            }
        }
    }
]