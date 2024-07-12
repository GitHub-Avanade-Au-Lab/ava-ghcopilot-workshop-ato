const configurations = {
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    },
    feature_flags: {
        use_new_dashboard: process.env.FEATURE_FLAG_USE_NEW_DASHBOARD === 'true',
        enable_logging: process.env.FEATURE_FLAG_ENABLE_LOGGING === 'true',
        beta_features: process.env.FEATURE_FLAG_BETA_FEATURES === 'true'
    },
    apiKeys: {
        mapService: process.env.API_KEY_MAP_SERVICE,
        weatherAPI: process.env.API_KEY_WEATHER_API
    },
    logging: {
        level: process.env.LOGGING_LEVEL,
        format: process.env.LOGGING_FORMAT
    }
};

// Removed the console.log(configurations) statement to avoid logging sensitive information
