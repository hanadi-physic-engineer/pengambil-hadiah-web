const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const { api_keys, link } = JSON.parse(event.body);

    if (!api_keys || !link) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing api_keys or link' })
        };
    }

    const results = [];
    for (const apiKey of api_keys) {
        try {
            // Simulate login (replace with actual API call)
            const loginResponse = await fetch('https://stake1022.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ api_key: apiKey })
            });

            if (loginResponse.status !== 200) {
                results.push({ account: apiKey, status: 'login_failed', message: 'Failed to log in' });
                continue;
            }

            // Simulate reward claim (replace with actual API call)
            const claimResponse = await fetch('https://stake1022.com/api/claim-reward', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (claimResponse.status === 200) {
                results.push({ account: apiKey, status: 'success', message: 'Reward claimed successfully!' });
            } else {
                results.push({ account: apiKey, status: 'no_reward', message: 'No reward notification available' });
            }
        } catch (error) {
            results.push({ account: apiKey, status: 'error', message: `Error: ${error.message}` });
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
    }

    return {
        statusCode: 200,
        body: JSON.stringify(results)
    };
};