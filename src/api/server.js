let token = '43d69b205f09d476f7d9d37f38daf9e54664a388bdc49497'

export const server_calls = {
    get: async() => {
        const response = await fetch(`https://wizywig.herokuapp.com/api/content`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async() => {
        const response = await fetch(`https://wizywig.herokuapp.com/api/content`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },

    update: async() => {
        const response = await fetch(`https://wizywig.herokuapp.com/api/content/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async() => {
        const response = await fetch(`https://wizywig.herokuapp.com/api/content/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}