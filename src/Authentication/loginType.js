import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const images = [
  {
    url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRUYGBgZGhgaGRgcGBgYGRoaGBgaGhoaGhgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQkISQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIAKkBKgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcBAAj/xABSEAACAQICBgQJBgoGCQUBAAABAgADEQQhBQYSMUFRYXGBkQcTIjKhscHR8EJScnOSshQWIyQ0YoKi0uFTVIOTs8IVJTM1Q2N0o+JEhLTD8Rf/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEBAQADAQEAAQUAAAAAAAABEQISITFBUQMiMkJxgf/aAAwDAQACEQMRAD8ABhHqbWNxI+1Fq053UnFuI4/Fo09UDiB2yO+YsZFfCrygnFgMag3uO+c/0mg+V3AyrbDCc/B4ZB7Wx02vAMeyVOlsQKzKbWsCOue8TFJhyxCqCSSAAMyScgB0xzJ7GU3onRL4iqtJBm28ncqjzmboHuHGbDozR6YemtKmPJUb+LMd7N0n43SLqxoAYWnnY1HsXb1IDyHpNzyl2VmffWlPRjxXfI2O0elVClRA6nffhyIPA9Ik8ToEk9ZPrFqs+Hu6XelxO9kH6wG8frDtlClWbq1MGBes2ooe9TDAK+809yN9H5rdG49E05631S/6BWFxew1xCLAaVDcezjA50ZGKOpVlNmUixB5EGLR+RlYN1qGD0jawOY5cR1S1Sori6m9uHEdYmYYDS7IQG3c4U6P0iGsQ3aIrMAnL9nRGMbiFpIXPdzPAROGxgPn5H53DtECdbtObWSnLMKPW0U9hQawaRNVyL3zJJ5mVAnIoCayYkpRJFOO6M0dUruEpIXY8twHNjuUdM0/VzVGnhrO9nq87eSn0AePSfRI66kVIHdXtT2qAPXuiZEJuduv5g9MsdcdGmnRVqQtTTz0HycrBurn1wzYxlwCCpFwQQRvuOPZMvK7qmK/hXT6YtcWecma3aC/Bavkj8k9yh5c1J5jh0QfsJtJLNiLVymKjq1LyjCR1E6YYNT8fi8theO8+yVwWOhIrYjnoZpoLOx0JJ+hNHmrVVbZDM9QhowYapaP8XS2yPKbM+yXdFtq47wY/h6QVQvRe3qnalIG56JH32Vv4ZItnzyPfGyp6I61MgZG/X74z4pvmn0RhnJaKVpGFSOI0F6kieMSpioGSVnNmOThiMkJD3UvQGwoxNRfLYfkwfkqfl25nh0dcBJpWr2n1rIqvYOAFvuBtl2SaXS7aIMcYRFpFS5adAilEUFgHFWcxWJSkhdzYAd54AdJjtgASTYDMnhYTP9atOBybG1NL26T873RyAIa24w1cS1RsiwGXIC4A7pUI85i8SXYsewdEQhm8npKWjSXhsQyG6ns4SChj6GTVwUYbTg2G2jZgpy7OEDMZVZ2LHdw6pYRJQcoT0VitVIS6tapVcSQ7XSl88jNvoDj17uuNaCwAqV0Ui42to5ZWXM37psSVAyAgAWyIG4dQ5RddXPQzEPRmjaWHTYpIFHHizHmzbyZJYzrGNPMLVOMYllvFgT1oBXaV0auIpNSfcdx4qw3MOmY3pLAPQqPScWZTboI4MOgiboVg1rrq9+E0ttB+VpgkW+Wu8p18RNP8fWXKnqaypYtY2IsGdCYfQxxRGEMfQzOrhwLDXU7AWTbIzc/uj4MEsJQLuqDexAmpYDDBE2chkAOqTRXGJJJHwIw9RryWaZEbVc84JcR7jf3847n830xlwL5dsXsH4tKTjHEePK0gU2h/q1qnkKuJXkVon11OX0N/PlK69KlRdXtAPWs73SlwPyqnQl+H627leStYdDCl5dMeRuK3JKHrO8Qwd77urkMuXISO6AgggEG4N+N+FpnqtZvtzheO6z6JbDPtLc0mPknfsn5jH1GU6YqVhbFntSVgca1NrqescDKdcTHkrCLD2NG0LrApABNx80716RzHRCijUVxtKQRzmMUq5BuDYwm0PrIyEXtfjyYdMV50sxowEWqyHo3HpVAIya1ypPpHMSJrHpgUE2EP5Rxl+qPndfKRgVmtmmBnRQ5DzyPu++ZXpfH+MbZHmj0mTNO6SOaKcz5x9koRNeef0W/joEWgiVEdQS0nKcfQwm1F0AuIZ6lRQ1NBsgHc1Rh/lXPrKy20xqIt74Z7H5jm6/svvHbeRaoEAxSiOYzBVKLbFVGQ9IyP0W3N2RtTFVRO0bimpOrrw3jmOImn6LxyuqupurDMesdcyZWl9q3pbxT7DHyG9B5xF1GlVEzy3HcZwCN4OsGGyTkdx5H3GOlbTPrnKJdc2Zy0WBF7IA9ZMkza07yBpjTFHCoS7Xa1wo3n3CU+seuCUQUpEFtxfgPojj1zMdIaResxLEm5vmbk9c0441NpGk8WKtV6gQIHYtsjcL/F+2MLERazoQWpjyGMCLBk1UEOrmJRHLtYsosq8yeMuWxzM20WN+d7d0CFMm4fGOu43HI5ybFfRzhtMuMmsw6d/fLWjpOk+87J5Hd3wCoaTU+cNk894ljTrKwuDeBYMHo3zHeM4rs9cFqGLdPMYj1d0m/6eq8l7pOBzVbVRcNapVs9beBvWn9Hgz/rcOHMkNSpy7ffPO18okejnC20SPC3tHT/ACirA8+q1vbkIilTIOR37hyPP+UnnBPvuL9Z90CquxeCWqrU3W6sLEHL/wDD0zJtYdDPhKpQnaU3KNzHI8mHGbQ2j3Pylz43N/VImk9XFr0zTfZsRkRe6sL2YG2+Vz1hYxBXjyPDdPBdWP8A6hPsP74tfBjU44lf7tj/AJpV65/pewajx9HhRpPwfPQovV/CFfYXa2BTK7W7La2jbfyg7obR1TEv4ukAWCl7Fgo2QVBNz0sItlXKtdFaZenYEmw3MN6/yjGndLsSzF9t23E55c+yWC6l4zLyEz/XWKOo+Lb5CfbWTsACNybmdCw5Pg+xZ3In21nD4O8b8xP7xZXlBgMVJJw9BnZUQXZiFUcyTYDvhWPB7jR8lP7xZbar6rVMPX8ZXCgooKWYMCz3G1f9UX+0IvKDBRofArhqKURvUeUfnOTd27/ZJQG/nwMlVMGeYy642cE/Bl9MjUoWKwyVVK1FDLxBFx6YH6U1LBu2HaxzOw3m9StvHbeHn4AxPnDqz9082EfmvefdDTmxiuNwtSi2zVRkPC+49TDI9kaWoJs9bRIdSrhHU71bMd1pn2t+qJw6GvT2RTXZ2122LBmcKNkFd1yN5jllVqXqxpu4FNzmPNvxHvEOsNWDrvzHpEyfQOr2LxC+NoINlW2QxdU8oC5tfeOmH2jsBjUW7Iu2o4Olie/dH1JZlT+7FxisUlJdp2AHLieoTO9aNcme6U8l5D/MfZJWm9AaUrsTsLY/82nfqAvkJSN4P8f/AEaf3qe+Lnnmfadv8DFWozG7G5iJpereoGyC+KQO+YFMMCqjmxB8puVsh6qrSng8xK1G/B1V6ZzUs6qwB+SbnO3OXOudxOAq0WBLfR+rOJrVXpIg26ZIcswCqwNtnazueqW3/wDPsdypf3h/hlWwYEwIsCFX4g40cKX94f4Z1dRcXyp/bP8ADJvU/qsDCLHQITjUbF8qf2//ABnfxFxf/L+2f4ZN6hwMxSuRmCR1Sy0zoOrhtjxux5e1s7LbXm2vfIW3iVloGmUdJOPOz9Bkj/Sy8j6JV2nrQGNZWqrqGUgowBDDMEHl0RdNfj2wM1c0p4k7Dn8mTl+ox4/R5jt6zkGwvfLffoPG8krMdXoFpat7PVKpGuejhfeeky1vn2ken+UmlXr3HVOPiESxd1QbrswHpM8nLomc674tq+JTDp5RTZUDnUqEZd2wL9Jj5m1NaPh6ysLoysL2upDDfuuMp5t/x0/ymf8Ag70iUeph2y2vLQHKzrk69drH9gzQG3A/Hxuh1MuHLqBrObYSueVNj3Wme+DZgcdUtu8S573pTQNZz+Z4j6p/VM58F5vjH+of79KVz8oawUzXs9UZ/wBI0FBBrUw1yDd0BuDY3BOUk2zX44TIMPo5a+OaixKh61cbQAJGyajbj0rFzzui3Gt0NI0CbLXpE+TkHQnuBkwj1QBxPg3GyfF4gl87B0GySBexZT5PXY9Ujai6aqU6/wCCVSdk7SKGzNN0uSv0TZhbde1t5jyZ6Lf60gr6oJ6xaeSjiUouDdkQgi1rszKPVC595HUJk3hDN9K4Yc1w4/77w5m0a1JvbIFXTmGRmR8RSVlNirOgIPIgnKWDTG9Y6ZbG4gLv26jdiKXPoUxTnTtxseHrI6B0ZXVhdWUgqRzBGRkTF6ToU22alamjW2tl3RTY5A2J3ZHulF4OcXt4Upxpuy/stZx95h2QG1qxBr4qu4zVPJ6lRlp/eP70JztwvL01rDYqnUXapujqDskoysL2BtcHfYjvg74Q/wBBq3+dSz/tkjXg2/RX+ub7lOd8JRtgKn0qQ/7imEmdYf4c8HVVWw7hBZFqlVHQET0m5PbCkcez2QL8FDXwtT65vuJDVePxwEm/TIbd3+2duLzzbplvg/H58PoVPZDnnZRbjULZnqPsnSMuwe2eAzPUfZO+4RAH6Fxm1pHEU1ACp4zIcWLrtMeZPuhYwgFqw3+uMYOmp/iLD1t8q+gZqn2Ru8z/AMJaj8Ip5f8ACH33lpqPpnxlPxLny6Y8k386nuHauQ6tnpivPrROveC/aGVz6emLAmbeEpQalO4/4R++00bD+avUPVC85JRvsEeEtcsOfrf/AK4CWmheEWizJRsNzPx5qnugE2GcfJPZn6pfPw4Yip10Yb1I7DEbUZrQCEur2lhlRqnyT5hJyB4KTy5fFhsme2oqpqHirEb7+gCWbbz13mbJrJV8UE+UMtv5RXgD09M0o7z03ko6R8ZiFpI9R/NRWc9QF7Dumbanuj4tsRXdE2dupd3Cg1HuBbaOYALdVhCPwi6Q2KKUgfKqm5+ghDelivcZVaF1KStRSq9R0LgsFULYKSdnM8xY9srnJNv6i+6rtYai0Md4+g6OCy1RsMrC5J8YhI3XO12PNOwtdaiK6G6uoZT0MARATT2pSUcO9VKjuUsxVgtti42jkN4GfUDLHwd6R26TUWPlUzdfoMSR3NfvEOss2FPuLzWNvzTEfVP90zOvBUfzyp/07/4lKaNrGPzbEdNJz+6bzOfBP+mVf+nf/EpRcfKq/jXlGa/HCZXoUf61H1+J+7VmrL8nq9nqmQpjVw+kGquGKpXrkhbbWZdcrkD5Q4x8z6XX42NW39vqtMpx3+9/J/rdP0um16zL+t4RqIU7FCqWsbB9hFv0lWY+iVWpOjKmJxP4XUB2Fdqm1aweoxNgo+apJPYo5x8zJdTffxpZPrmXa9KraVwo4/m/+O009fafVMu13z0vg/8A23/yGk8fVtQIz+OUzDDIG0wytuNWqD1Gm4M1KZfo/PTP9tW+5Uj5/SpOqWkPwOrikf5NNz11KDEKO0M3cJW6PwpOCxdZsyTRpg8b+Npu/fdI/r5hfF4xyMg4WoP2hst+8rd8ucThPF6Gtxfxbn9ushH7uyOyVb8v9xMWXg3H5s31r/cpznhOywD9L0x+9FeDg/mrfWv91I14Um/MG6alP1n3Sf8Al/6v8I8En6I/1z/4aQ3Tj8cBAjwRj80f65/uJDccZHX+6mQ26Zd4Pv03+zqetZqTebMt8Hn6b/Z1PWsrn5Sv2NRHHqPsnT7B6jOD3+sTzDLsHtkGzzVrLTWN/tPvpD87zM/1f/31jP7T1pNBYZmX39E+M18Jp/LU/qv87yHpzBPgMSlalkjeWnIG3l0z0ZnsboMmeE4flaf1R++0LdL6NXE4c02yJAKt81wPJb2HoJj3JE5toH15xqV/EVEPkvSYjmCHIKnpBuOyaZhj5C9Q9UxDGU3QsjghkLAqeB427t/HKbfg/MX6I9UOpkkHN+hnX7zKR5O33R7oGkXhtr2PydP6Z+4YGgC0rn4dcQnLMx/abkO4SODn7I/tiMlPUrFWKupVhvVgQR1gxPjhNe0jouhiF2aqK/I7mHUwsR2GBOlvB+63bDPtj5jkBuxxke0Drmc6laaGVqzbR7ZhGLw9Sk2xVRkbkwt3HcesQ2w3hAdx5S00PSHI55HajvNqero0xuhsPWIarSV2XyQWufJucvTJiIFUKosFsABkABkAICNrw/zqOf6rfxRv8eH+fT+yffF40mgugZSrAEEEEEXBByII5Suw+iqFFy1KkiNa11UA2Jva44ZCB/461DudPsD3RxNZ6z5hxllki/ww8aYs075WGr/VP9w3mceCpbY2r/07/wCJSl4+mazqyF7qwKsAi5hhYjIX3So1cR8JiXqqoZXQoAbi12Rrm30LdsrmWSlWsr8nq9krqugMKx22w1MszEsSgJLFiST0kyk/Gpxb8mmWXnGe/G18vyaZfrGT40el7S0BhFNxhqN/q0NvK6RLAEC1huvYcuiCQ1wb5icflN1yN+PaHjS+3/OGWj0Nk9/smZ65LfTGB6fEeiu8tRr2g40vt/zgbrDp8VMdh64ZB4sJmvlAbLs1z05yuObKK2thI1PR9EPtikge5O2EXbubgnate5z74AJr439Mn2V90eTXs/0tPuEnxoG+M0dRqWNSkjkCwLorEDfYEjdO18IjpsOiMnkjYKgr5NreScsiBbqgjhtb3fJHptbfZb+oyQNZqvJPst/FF40xLhsIlNStNERbk7KqFF8s7DjlBTwp5YA/WUx973R8ayVeSfZb+KD+t+k6uJprQ2Vttq7EA/JBAGZPO/ZHzLOtF9xdeClbYR/rW+4kNF4/HCZ7oLSjYSl4tEVgWLEttbyALCxHKWP421QD+ST9/wB8V5toF58345yp0dq5hsO4qUkKvYrfbdsmtfJmI4CDb69kZbFL7Z98UmvbG1qaHqZjDx6Hobjee32Tx9g9sDfxwqf0A7290h4nwhhAQ1NL5Cwc3y6LZdsPGjTegh/rrFn6z/JNAaZbgtOomJqYq6F6m1dNsWXatx47pdfj6PmU/tx2Wj0IdL6Cw+IZWrIWIGyDtutgTe3ksJO2LWt1d0D/AMelPyU+3HV1vLbkQ/tn3Sbz0JYtNJavYas+3UpbTEAE7TrcDIX2WAvwv0dEtqGQA4DIdggudan/AKJftH3TtPWd/wChH2j7oePR+j2vJ/JJ0VP8hgZT32l7pnSb4gKpTZAbayN+BHLplT4ixv8AHxumnPqFTOxnePbElLRv653YPTKIdh+mOrVtIqWnS05daYdxtGnURlrKjJYlg4BAAzJ6OuYlpIJtu1MFE2iUUkmy3yzOd7TQtdtKbFEUlPlVPO6EG/vOXVeZhj6nye0zb/HKjr04rxavISNaPo02sTqajQi1Ypio7oT8kMOw2PrEGqZl5qxWK4lP1rof2gbfvbMzq4K/wEKcv5zopEnl8c5ahLedb46Yy+LpLe7AH45b4tLEBdH3M8cBYzlfTdJNxJ/dErMRrco83ZH7xj9jFm2B6PR75luPw+xUdD8lmHphTidaXbdtH90eiD2LqGo5dhmd8rnYVQVSOKkeVIsJK0YaVIsJHRTi1STaci+1Oo7TuP1R64Wrgzv9JlFqHT8up9EeuGwS/ukW+xVScKeAiBgieEuvFc+6cdOfcIaSl/A+i59EQ+D55nkJdGmeocuM8KVtwt64aGH49fyj/Tf7xi8DiCjAxekR+WqfWP8AfaR7Tb8SJ8drW7JsINkkWL8f2R7YN2iYoNFJnw3tmcKSXgsI9VthBc93fCN9RsV4sOmw5N7oGIbsJABhbgwIFIX6KqogW5GQHKDeKwr022KiMjcmBB7L7+yMiK+xGh08VSJvtW6xJCMhOTrbrAmcLUYbmPfHUxlQfKMnFa0c4YEGxv1Zxh8Nl8cIDppSoPi0mUNPVBxbv98WUDKlSNur4+OuK8QfgwXTWiqm4BvpAewRH424j5lL7DfxwyhqZHREsoAJJsACSTwAF7yQEg1rxpDYpCkD5dTfbgg395y6rzGc6rQLp/SXjqj1D5u5RyQeaPb1kwXd9oknjJ+k6vyR1mV86eZkZ9V4R1BEKsfRZVJIpSXQcqQymxUgg8iDcGRUEkLIrSLGvpeq2ZYk9JNu6QKmJqtva3VlPAR0CIYgOjHeSes3iRTk9liQkPIYiBJ7Yk3xc4acWjEVUjgpx9UjoSGniKtOOpSjwWdEnVSCrUSj5VT6K+uGVuXfBDUY51Opcu2Fx6e7hEjr643R3mc2PjjF2ilEEmtj44zwTsHpjpFvjPunQIwwfSQ/LVfrKn3mkaTdKj8vV+sqffaQyJtCwkmdE8oj1GkWYKN5IEZDLUPRxIL2zY2HVNRCWAA4C3dKDVLR4RFHBQPtH4MImE5+7tXEfFYRKq7FRFdTwZQw9MEtKeD2g9zQZqTfNPlp3E7Q74azkU6s+DGMaU1TxWHuWp7aD5aeWO0bx3SkBn0FKjSmreGxGdSkNr56+Q/eN/beXO/6MYygEdVZaaz6ITC1/FI5cbIY3ABXavYEjfkAdw3ypDSvoKIiNmK2p68FN5eygkmwUEkncAMyTMj09pHx1R6rZL8kckXJR18esmSF01XFNqRqFkYWIbM25Bt4B3Wva0q8TSDrsnIdEmTCwOOxZiTxnVSWbaPA3Rs4WaeUT41DVI8iR4UDFrThaeEosfUTirFgSTkLURdpwTsVMkzwnCZ1YGWBOWhHofVN6yLULqqMLi12a17bsgO+E2D1Qw6WLBnP6xy+yth33md6kNnVGgznZRSx5KCT3CXuC1TxL71CDm5z+yLmaHQwyIuyiBRyUBR3CObuMm90aF8HqTSXOq7ueS+QvtPpEqtfdEpQo03ooECvsPa5uHHkkk5mxW37UPC46ZV6x4Tx+Gq07Zsh2fpr5SfvARTr3NK7jLtC6zPhixVFfaAFiSLWN8rS4HhEf+rp9tvdAUGOAzp8Yz2jpfCI/HDr9s+6PL4Qm/q4v9M/wwCQSQixXmHByPCAf6uPt/8AjOPr6eGHz4Xf/wAYGhYoLFkPEfFNtu7kWLszkcizE29MjOkntTjLpKlKxFCS+1SwG3WBtkvr+PXKkJNK1H0Tsotxm3lHqOfqivQwY4GhsIBzzPs9EdjjCJImVBE5FWiZIciajhQWY2AFyegZn0XnYL+ELSXicIVU2aqdgfR3ue4W7RHJtxTNtK6QNetUqn5bkjoXco7FAHZIm3IL1jwhhqhhKb1AHRHFjkyhh3Gb3/TET2Hdqc25udPVzB7Kn8FoZj+jT3RX4u4T+rUfsJ7pPkGSidnJ0waEMI3sR1p5YgYKxJk8b5Pw8pKiE7snlDDCy4w+4RUaznxbfNPcY2zzSNK/7Kp9H2zJsX/tW6/ZCez1OLxStISSRThgjStQ8WWoMnFH/dfMekNCc3gL4OvPr/QT1tDk+6YdfTctPBeZiTPSDdKCesJ6eEAxDWbA+JxVZAMtssv0W8seu3ZKwQo8I36Yfq09bQWnbz7kZX6cQyQrSKseWFOJK1Jc6K0BWrrtIAo4FiRf0Sipbx1ibFon/Yr+z6pFNk2JVkdkcFWU2YHeCIyTLvXv9KP0E9sHoQHkIDAkXAIJHPomiav64YZcnVkNrXNrCZtFwpt6wmOp1RdHVui+fdHzMm1T3jr9s1dPNEiprxESRHBviHioIImQ+EnSXjMVsA+TRXY/bbyn/wAo/ZmwzAtYv0nEfXVfvtK/xz2L8VDQ91IHljqgGYe6k+evVNe/iY1rDnyF6h6zFxrC+YvV7THZkK//2Q==',
    title: 'Admin Login',
    width: '40%',
    onclick:"/login"
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRati4SU11CjnxaNVDKqE2pTypSzhkqQ1aVcg&usqp=CAU',
    title: 'User Login',
    width: '40%',
    onclick:"/login"
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
export default function LoginType() {
  const history=useHistory();
  return (
    <div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            marginLeft:"6vw",
            marginTop:"15vh"
          }}
          onClick={()=>history.push(`${image.onclick}`)}

        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
            style={{
              fontSize:"40px"
            }}
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    <div className='row'>
      <div className='offset-sm-1 col-sm-2'>
        <h4>Admin Id: </h4><span>pradeep@gmail.com</span>
        <h4>Admin password: </h4><span>12345678910Aa@</span>
      </div>
    </div>
    </div>
  )
}
