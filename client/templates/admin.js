Template.admin.helpers({
	'onlineUsers' : function(){
		return OnlineUsers.find();
	},
	'messages' : function(){
		return Messages.find({},{sort:{timestamp:-1}});
	},
	'users' : function(){
		return Meteor.users.find({},{sort:{createdAt:-1}});
	}
});