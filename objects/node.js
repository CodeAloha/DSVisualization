/*
	Node Class
*/
	window.totalNodes = 0;
	window.depth = 1;
	function Node(d, l, r, n){
		this.left = l;
		this.right= r;
		this.name = n;
		this.data = d;
		this.element ;
		this.num  = window.totalNodes;
		this.depth= window.depth;

		drawToDOM(this);
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

	function drawToDOM(node){
		//Drawing Method for Binary Tree.

		if( (Math.pow( 2, window.depth ) - 1) == window.totalNodes ){
			window.depth++;
			$("#container").append('<div id="depth-'+ window.depth +'" class="depth"></div>');
		}
		window.totalNodes++;

		var elem = document.createElement("span");
		elem.id = 'node' + window.totalNodes;
		elem.className = 'node';
		elem.innerHTML = node.data < 10 ? ("0" + node.data) : node.data;
		node.element = elem.id;
		
		$("#depth-" + window.depth ).append(elem.outerHTML);

	}