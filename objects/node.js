/*
	Node Class
*/
	window.totalNodes = 0;
	window.depth = 1;
	function Node(d,l,r, n, depth){
		this.left = l;
		this.right= r;
		this.name = n;
		this.data = d;
		this.element ;
		this.num  = totalNodes;
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

		if( (Math.pow( 2, window.depth ) - 1) == window.totalNodes ){
			window.depth++;
			document.getElementById("container").innerHTML +=
				'<div id="depth-'+ window.depth +'" class="depth"></div>';
		}
		window.totalNodes++;

		var elem = document.createElement("span");
		elem.id = 'node' + window.totalNodes;
		elem.className = 'node';
		elem.innerHTML = node.data < 10 ? ("0" + node.data) : node.data;

		node.element = elem.id;
		document.getElementById("depth-" + window.depth ).innerHTML +=
			elem.outerHTML;

		
	}