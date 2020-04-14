module.exports = {
    //network selected by default if user's active network wasn't saved
    network: {
        defaultNodeKey: 'Mainnet_Infura'
    },

    //defines which elements will be loaded from storage
    storage: {
        nodeList: true,
        activeNode: true,
        contractList: true,
        activeContract: true
    },

    stub: {
        contracts: {
            path: '../stubs/contractListStub.js', //TO DO
            use: false
        }
    },

    //wallets for donations
    donations: {
        eth: '0xD277a99c0d08DED3bDB253024bfF81E41496465c',
        btc: '1JMpxB35CQvhxGmrhqbh5dbe9LwJT8tU3q'
    },

    contacts: {
        email: 'contact@',
        github: 'https://github.com/olekon/justsmartcontracts'
    },

    server: {
        url: 'https://justsmartcontracts.dev/jscapi'
        //url: 'http://localhost:3000'
    }
}
