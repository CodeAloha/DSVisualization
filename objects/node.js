/*
	Node Class
*/

	function Node(d,l,r, n){
		this.left = l;
		this.right = r;
		this.name = n;
		this.data =d;
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