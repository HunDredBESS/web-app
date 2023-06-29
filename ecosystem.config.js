module.exports = {
  apps: [{
  	script: 'npm start'
  }],
  deploy : {
  	production : {
  		user : 'roikao_nine',
  		host : '34.124.203.184',
  		ref : 'origin/main',
  		repo : 'git@github.com:HunDredBESS/web-dns.git',
  		path : '/home/web-app',
  		'pre-deploy-local' : '',
  		'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
  		'pre-setup' : '',
  		'ssh_options' : 'ForwardAgent=yes'
  	}
  }
}
