/*
	Binary Tree Class
*/

	function BinaryTree(head){
		this.head = head;
		this.depth = 0;
		this.totalNodes = 0;
		this.totalSum = 0;
		var firstNode = true;
		this.isFirstNode = function(){
			return firstNode;
		}
		this.toggleFirstNode = function(){
			firstNode = !firstNode;
		}
	}

	/*
		Helper Functions
	*/
	BinaryTree.prototype.dfs = function(v, node){
		if(node == undefined && !this.isFirstNode() ){
			return;
		}
		else if(node == undefined && this.isFirstNode() ){
			this.toggleFirstNode();
			node = this.head;
		}

		if(v == node.data)
			setTimeout( function (){
				$( "#" + node.element ).addClass("correct");
			}, (300 * node.num) );
		else
			setTimeout( function (){
				$( "#" + node.element ).addClass("wrong");
			}, (300 * node.num) );


		this.dfs(v, node.left );
		this.dfs(v, node.right);
	}

	BinaryTree.prototype.resetTree = function(){
		$('#container').html('<div id="depth-1" class="depth"></div>');

		window.totalNodes = 0;
		window.depth = 1;

	}

	BinaryTree.prototype.generateTree = function(n, r){
		if( !Number.isInteger(n) )
		{
			throw { 
			    name:        "Value Provided is not an Integer", 
			    level:       "Runtime", 
			    message:     "Error: Integer Required for parameter generateTree(n, _).",
			    toString:    function(){return this.name + ": " + this.message;} 
			}; 
		}

		var lastNode 	= null, 
			randomValue;

		for(var i=0; i < n; i++)
		{
			randomValue = Math.round( Math.random() * 99 );

			if(i == 0)
			{
				var node = new Node(randomValue);
				this.head = node;
				lastNode = node;
			}
			else
			{
				var node = new Node(randomValue);
				if( !lastNode.leftNode )
					lastNode.setLeftNode( node );
				else if( !lastNode.rightNode )
					lastNode.setRightNode( node );
				lastNode = node;
			}
		}
		
	}
