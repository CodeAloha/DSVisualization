/*
	Node Class
*/

	function Node(l,r,d){
		this.left = l;
		this.right = r;
		this.data =d;
	}
	Node.prototype.getLeftNode = function(){
		return this.left;
	}
	Node.prototype.getRightNode = function(){
		return this.right;
	}
	Node.prototype.getData = function(){
		return this.data; 
	}
	Node.prototype.setLeftNode = function(left){
		this.left = left;
	}
	Node.prototype.setRightNode = function(right){
		this.right = right;
	}
	Node.prototype.setData = function(data){
		this.data = data; 
	}