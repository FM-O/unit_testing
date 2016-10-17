expect = require('chai').expect;

describe 'Toggle', ->

    beforeEach ->
        $.fx.off = true
        @fixture = $("""
            <a data-toggle="#test1" id="atest1" data-group="1">test1</a>
            <div id="test1">aze</div>

            <a data-toggle="#test2" id="atest2" data-group="1">test2</a>
            <div id="test2">aze</div>

            <a data-toggle="#test3" id="atest3">test3</a>
            <div id="test3">aze</div>
        """)
        $('body').append(@fixture)
        Toggle.init()

    afterEach -> @fixture.remove()

    it 'should autohide element', ->
        Toggle.init()
        expect($('#test1').is(':visible')).to.be.false


    it 'should show element', ->
        $('#atest1').trigger("click")
        expect($('#test1').is(':visible')).to.be.true

    it 'should hide element', ->
        $('#test1').show()
        $('#atest1').trigger("click")
        expect($('#test1').is(':visible')).to.be.false

    describe '#group', ->
        it 'should hide other elements', ->
            $('#test1').show()
            $('#atest2').trigger('click')
            expect($("#test1").is(':visible')).to.be.equal(false, 'un clic sur le bouton d\'un groupe doit masquer les éléments ouvers')
            expect($("#test2").is(':visible')).to.be.equal(true)