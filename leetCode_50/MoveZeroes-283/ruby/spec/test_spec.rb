require 'move_zeros'

  describe "moveZeros" do
    
    context "a context" do
      it "Returns the right array, input: [0, 1, 3, 5, 0], output: [1, 3, 5, 0, 0]" do
        input = [0, 1, 3, 5, 0]
        output =  [1, 3, 5, 0, 0]
        expect(moveZeros(input)).to eq(output)
      end
    end
    
  end